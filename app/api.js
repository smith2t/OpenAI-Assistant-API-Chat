// api.js

// Uploads a base64 encoded image and gets a description
export const uploadImageAndGetDescription = async (base64Image) => {
    console.log('Uploading image...');
    const response = await fetch('/api/upload_gpt4v', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ file: base64Image }),
    });
    if (!response.ok) {
      console.error('Error processing image');
      throw new Error('Error processing image');
    }
    console.log('Image uploaded successfully');
    return await response.json();
  };
  
  // Uploads a file
  export const uploadFile = async (file) => {
    console.log('Uploading file...');
    const fileData = new FormData();
    fileData.append('file', file);
    const response = await fetch('/api/upload', {
      method: 'POST',
      body: fileData,
    });
    if (!response.ok) {
      console.error('File upload failed');
      throw new Error('File upload failed');
    }
    console.log('File uploaded successfully');
    return await response.json();
  };
  
  // Creates an assistant
  export const createAssistant = async (assistantName, assistantModel, assistantDescription, fileId) => {
    console.log('Creating assistant...');
    const response = await fetch('/api/createAssistant', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ assistantName, assistantModel, assistantDescription, fileId }),
    });
    if (!response.ok) {
      console.error('Failed to create assistant');
      throw new Error('Failed to create assistant');
    }
    console.log('Assistant created successfully');
    return await response.json();
  };
  
  // Creates a thread
  export const createThread = async (inputmessage) => {
    console.log('Creating thread...');
    const response = await fetch('/api/createThread', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ inputmessage }),
    });
    if (!response.ok) {
      console.error('Failed to create thread');
      throw new Error('Failed to create thread');
    }
    console.log('Thread created successfully');
    return await response.json();
  };
  
  // Runs an assistant
  export const runAssistant = async (assistantId, threadId) => {
    console.log('Running assistant...');
    const response = await fetch('/api/runAssistant', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ assistantId, threadId }),
    });
    if (!response.ok) {
      console.error('Failed to run assistant');
      throw new Error('Failed to run assistant');
    }
    console.log('Assistant run successfully');
    return await response.json();
  };
  
  // Checks the status of a run
  export const checkRunStatus = async (threadId, runId) => {
    console.log('Checking run status...');
    const response = await fetch('/api/checkRunStatus', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ threadId, runId }),
    });
    if (!response.ok) {
      console.error('Failed to check run status');
      throw new Error('Failed to check run status');
    }
    console.log('Run status checked successfully');
    return await response.json();
  };
  
  // Lists messages
  export const listMessages = async (threadId, runId) => {
    console.log('Listing messages...');
    const response = await fetch('/api/listMessages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ threadId, runId }),
    });
    if (!response.ok) {
      console.error(`Error fetching messages: ${response.status} ${response.statusText}`);
      throw new Error(`Failed to list messages: ${response.status} ${response.statusText}`);
    }
    const jsonResponse = await response.json();
    console.log('Messages listed successfully');
    return jsonResponse;
  };
  
  // Adds a message
  export const addMessage = async (data) => {
    console.log('Adding message...');
    const response = await fetch('/api/addMessage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      console.error('Failed to add message');
      throw new Error('Failed to add message');
    }
    console.log('Message added successfully');
    return await response.json();
  };