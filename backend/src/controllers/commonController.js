//importação do banco de dados
const database = require('../database');


//json sempre minusculo -> sempre utilizando ponto e vírgula
module.exports = {

    async index(req, res){
        return res.json({
           "apresentação": "Como o ramo é",
           "noticias": "Pelo visto não vai ter",
           "patrocinadores": "Patrocínadores do Ramo"
        });
    },

    async projetos(req, res){
        return res.json({
            "projetos": "IA, Console, Jogos, Web",
            "imgs": "IAImg, ConsoleImg, JogosImg, WebImg"
        });
    },

    /* A ideia é que após o encerramento do PSE, seja enviado automaticamente uma planilha com as pessoas inscritas para o email do Ramo (lib tipo multer) */

    async pse(req,res){
        return res.json({
            "funcionamento": "O pse é feito normalmente",
            "equipesDisp": "byte, botz, rocket",
            "areasDisp": "prog, abc, bca"
        });
    },

    async noticias(req, res){
        return res.json({
            "noticias": "Julio foi expulso do ramo!",
            "img": "imgDaNoticia"
        });
    },

    async noticia(req, res){
        return res.json({
            "cabeçalho": "nome",
            "corpo": "corpo da notícia",
            "link": "se tiver link do instagram relacionado a noticia"
        });
    },

    async sobre(req,res){
        return res.json({
            "imagem": "http://www.youtube.com/",
            "sobre": "Informações sobre o Ramo",
            "valores": "briga, inveja e procrastinacao"
        });
    }
}
