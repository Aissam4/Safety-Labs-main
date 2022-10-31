var bcrypt = require('bcryptjs');

const hash_password = async (password: string) => {
    const salt = await bcrypt.genSaltSync(10);
    const hash = await bcrypt.hashSync(password, salt);
    return hash;
}

const compare_password = (password: string, hash: string) => {
    return bcrypt.compareSync(password, hash);
}

export {
    hash_password,
    compare_password
}