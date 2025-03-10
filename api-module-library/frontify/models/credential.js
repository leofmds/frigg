const mongoose = require('mongoose');
const { Credential: Parent } = require('@friggframework/module-plugin');

const schema = new mongoose.Schema({
    accessToken: {
        type: String,
        required: true,
        lhEncrypt: true,
    },
    refreshToken: {
        type: String,
        required: true,
        lhEncrypt: true,
    },
    domain: {
        type: String,
        trim: true,
    }
});

const name = 'FrontifyCredential';
const Credential =
    Parent.discriminators?.[name] || Parent.discriminator(name, schema);
module.exports = { Credential };
