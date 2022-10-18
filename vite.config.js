import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

//Path to make Relative alias
import path from 'path';

// Alias to make the paths for shorts
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, './src/components'),
            '@styles': path.resolve(__dirname, './src/styles'),
            '@templates': path.resolve(__dirname, './src/templates'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@utils': path.resolve(__dirname, './src/utils')
        }
    }
});
