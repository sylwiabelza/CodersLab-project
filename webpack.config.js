//Konfiguracja Webpack
module.exports={

    // tak wpisz pliki wejściowe jesli masz więcej niż jeden

    // entry:["./js/app.js","./js/zadanie01.js","./js/zadanie02.js"],

    entry:["./js/projekt.jsx"],

    output: {

        filename: "./js/out.js"

    },
    devServer: {
        inline: true,
        contentBase: './',
        port: 3001
    },

    watch: true,

    module: {

        loaders: [{

            test: /\.jsx$/,

            exclude: /node_modules/,

            loader: 'babel-loader',

            query: {

                presets: ['es2015','stage-2','react']

            }

        }, {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        },{
            test: /\.scss$/,
            loader: ['style-loader', 'css-loader', 'sass-loader'
            ]
        }

        ]

    }

};