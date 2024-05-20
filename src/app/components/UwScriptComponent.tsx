'use client'

import React, { useEffect } from 'react';

const UwScriptComponent = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.userway.org/widget.js';
    script.setAttribute('data-account', '1r5lII6pQt');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default UwScriptComponent;