const { Router } = require('express');
const { crearUsuario, login, revalidarToken } = require('../controllers/auth');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

//Crear un nuevo usuario 
router.post('/new', [
    check('name', 'El nombre no es válido').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatorio').isLength({ min: 6 }),
    validarCampos
], crearUsuario);

//Login de usuario
router.post('/', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatorio').isLength({ min: 6 }),
    validarCampos
], login);

//Validar y revalidar token
router.get('/renew', validarJWT, revalidarToken)

module.exports = router;