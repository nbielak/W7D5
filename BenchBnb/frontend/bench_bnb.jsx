import React from 'react';
import ReactDom from 'react-dom';
import { postUser, postSession, deleteSession } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  window.postUser = postUser;
  window.postSession = postSession;
  window.deleteSession = deleteSession;
  const root = document.getElementById('root');
  ReactDom.render(<h1>Welcome to BenchBnb</h1>, root);
});
