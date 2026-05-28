'use client';

import type { UseChatHelpers } from '@ai-sdk/react';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { useStickToBottom } from 'use-stick-to-bottom';
import AiResponse from './text/ai-response';
import UserMessage from './text/user-message';

type PropsType = {
  useChat: UseChatHelpers & {
    addToolResult: ({
      toolCallId,
      result,
    }: {
      toolCallId: string;
      result: unknown;
    }) => void;
  };
  isThinking: boolean;
};

export function RenderMessage({ useChat, isThinking }: PropsType) {

  const { messages, setMessages, reload, error } = useChat;

  const { contentRef, scrollRef } = useStickToBottom();

  useEffect(() => {

    if (error?.message.includes('Incorrect API')) {

      toast.error('Incorrect API key provided', {
        description: 'Please check your API key and try again.',
      });

    }

  }, [error]);

  return (

    <div
      className="flex-[1_1_0] overflow-y-auto custom-scrollbar px-5 pt-12 pb-6 md:px-12"
      ref={scrollRef}
    >

      <div
        className="text-gray-800 dark:text-white/90 space-y-6 max-w-none prose dark:prose-invert"
        ref={contentRef}
      >

        {messages.map((message, messageIdx) => {

          return (

            <div key={message.id}>

              {message.parts.map((part, i) => {

                if (part.type === 'text') {

                  if (message.role === 'user') {

                    return (

                      <UserMessage
                        key={`${message.id}-${i}`}
                        message={part.text}
                        showActions={
                          messages.length - 1 === messageIdx ||
                          messages.length - 2 === messageIdx
                        }
                        onEdit={async (newMessage) => {

                          setMessages((prev) => {

                            return prev.map((prevMsg) => {

                              if (prevMsg.id !== message.id) return prevMsg;

                              return {
                                ...prevMsg,
                                parts: prevMsg.parts?.map((part) => ({
                                  ...part,
                                  text: newMessage,
                                })),
                              };

                            });

                          });

                          reload();

                        }}
                      />

                    );

                  }

                  return (

                    <div
                      key={`${message.id}-${i}`}
                      className="space-y-6"
                    >

                      {/* AI RESPONSE */}

                      <AiResponse response={part.text} />

                      {/* SEO SECTION */}

                      <div className="bg-white dark:bg-dark-primary border dark:border-gray-800 border-gray-200 rounded-2xl p-6">

                        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                          SEO Optimization
                        </h2>

                        <div className="space-y-4">

                          {/* KEYWORDS */}

                          <div>

                            <p className="text-sm text-gray-400 mb-2">
                              Suggested Keywords
                            </p>

                            <div className="flex flex-wrap gap-2">

                              <span className="px-3 py-1 rounded-full bg-primary-500/10 text-primary-500 text-sm">
                                AI Blogging
                              </span>

                              <span className="px-3 py-1 rounded-full bg-primary-500/10 text-primary-500 text-sm">
                                SEO Content
                              </span>

                              <span className="px-3 py-1 rounded-full bg-primary-500/10 text-primary-500 text-sm">
                                Content Marketing
                              </span>

                              <span className="px-3 py-1 rounded-full bg-primary-500/10 text-primary-500 text-sm">
                                Blog Automation
                              </span>

                            </div>

                          </div>

                          {/* SEO SCORE */}

                          <div>

                            <p className="text-sm text-gray-400 mb-2">
                              SEO Score
                            </p>

                            <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-3">

                              <div className="bg-primary-500 h-3 rounded-full w-[85%]"></div>

                            </div>

                            <p className="mt-2 text-sm text-primary-500 font-semibold">
                              85/100 Optimized
                            </p>

                          </div>

                          {/* META DESCRIPTION */}

                          <div>

                            <p className="text-sm text-gray-400 mb-2">
                              Meta Description
                            </p>

                            <div className="bg-gray-100 dark:bg-dark-secondary p-4 rounded-xl text-sm text-gray-700 dark:text-gray-300">

                              Generate SEO-optimized blogs faster with Inkly’s AI-powered blogging platform.

                            </div>

                          </div>

                        </div>

                      </div>

                    </div>

                  );

                }

              })}

            </div>

          );

        })}

        {isThinking && (

          <div className="text-gray-500 font-medium">
            💭 Inkly AI is generating content...
          </div>

        )}

      </div>

    </div>

  );

}