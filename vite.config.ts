import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/setupTests.ts',
        coverage: {
            provider: 'v8',
            reporter: ['text', 'html'],
            thresholds: {
                statements: 85,
                branches: 85,
                functions: 85,
                lines: 85,
            },
        },
    },
})
