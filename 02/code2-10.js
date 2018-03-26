const alias = require('rollup-plugin-alias')
import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
export default {
    input:'main.js',
    output:{
        file:'dist/app.js',
        format:'umd'
    },
    plugins:[
        alias({
            'vue':'node_modules/vue/dist/vue.esm.js'
        }),
        resolve(),
        replace({
            'process.env.NODE_ENV':JSON.stringify('production')
        })
    ]
};