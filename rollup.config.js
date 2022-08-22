// rollup.config.js
import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
    input: './src/index.js',

    output: [
        {
            name: 'comlib',
            sourcemap: true,
            file: './dist/index.js',
            format: 'cjs',
            globals: { react: 'React' },
        },
        {
            file: './dist/index.es.js',
            format: 'es',
            exports: 'named',
        }
    ],

    plugins: [
        peerDepsExternal(),
        postcss({
            extract: false,
            modules: true,
            use: ['sass'],
        }),
        babel({ 
            exclude: 'node_modules/**',
            presets: ['@babel/preset-react']
        }),
        resolve(),
        commonjs(),
    ],

    external: ['react', 'react-dom'],
};