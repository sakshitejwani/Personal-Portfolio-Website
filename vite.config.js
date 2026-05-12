// =========================================
// vite.config.js — Vite configuration
//
// Vite is the tool that runs your dev server
// and builds your project for deployment.
// You don't need to change this file.
// =========================================

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
