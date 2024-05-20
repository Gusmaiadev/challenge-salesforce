'use client'

import { useEffect } from 'react';

const WatsonAssistantChat = () => {
  useEffect(() => {
    const loadWatsonAssistantChat = () => {
      const script = document.createElement('script');
      script.src = 'https://web-chat.global.assistant.watson.appdomain.cloud/versions/latest/WatsonAssistantChatEntry.js';
      document.head.appendChild(script);
    };

    const initializeWatsonAssistantChat = () => {
      window.watsonAssistantChatOptions = {
        integrationID: '81ab3c5f-0819-4259-9fb4-6b2ee2c16190',
        region: 'au-syd',
        serviceInstanceID: '7324178e-830f-4ccf-89b8-49a36d59d633',
        onLoad: async (instance) => {
          await instance.render();
        },
      };
    };

    loadWatsonAssistantChat();
    initializeWatsonAssistantChat();
  }, []);

  return <div id="watson-assistant-chat"></div>;
};

export default WatsonAssistantChat;