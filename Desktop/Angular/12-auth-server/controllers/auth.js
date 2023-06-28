const { response } = require("express");
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');

const crearUsuario = async (req, res = response) => {

    const { name, email, password } = req.body;

    try {
        //verificar el email
        let usuario = await Usuario.findOne({ email: email });

        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya existe con ese email'
            });
        }

        //Crear usuario con el modelo 
        const dbUser = new Usuario(req.body);

        //hashear la contraseña
        const salt = bcrypt.genSaltSync();
        dbUser.password = bcrypt.hashSync(password, salt);

        //generar el token
        const token = await generarJWT(dbUser.id, name);

        //crear usuario de db 
        await dbUser.save();

        //general respuesta exitosa
        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            name,
            token
        });


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }

}

const login = async (req, res = response) => {

    const { email, password } = req.body;

    try {

        const dbUser = await Usuario.findOne({ email });

        if (!dbUser) {
            return res.status(400).json({
                ok: false,
                msg: 'El correo no existe'
            });
        }

        //Confirmar si el password hace match
        const validPassword = bcrypt.compareSync(password, dbUser.password);
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'El password no es válido'
            });
        }

        //Generar el jwt 
        const token = await generarJWT(dbUser.id, dbUser.name);

        //general respuesta exitosa
        return res.json({
            ok: true,
            uid: dbUser.id,
            name: dbUser.name,
            email:dbUser.email,
            token
        });


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }

    return res.json({
        ok: true,
        msg: 'Login usuario /'
    });

}

const revalidarToken = async (req, res = response) => {

    const { uid } = req;

    //leer la base de datos 
    const dbUser = await Usuario.findById(uid);


     //Generar el jwt 
     const token = await generarJWT(uid, dbUser.name);

    return res.json({
        ok: true,
        uid,
        name: dbUser.name,
        email: dbUser.email,
        token
    });

}

//Se utiliza para exportar los metodos 
module.exports = {
    crearUsuario,
    login,
    revalidarToken
}