module.exports = (sequelize, Datatypes) => {
    const About = sequelize.define(
        'About',
        {
            caption: {
                type: Datatypes.STRING,
            },
            age: {
                type: Datatypes.STRING,
                allowNull: false,
            },
            gender: {
                type: Datatypes.ENUM('male', 'female'),
                allowNull: false,
            },
            birthDate: {
                type: Datatypes.DATEONLY,
                allowNull: false,
            },
        },
        {
            underscored: true,
        }
    );

    About.associate = (models) => {
        About.belongsTo(models.User, {
            foreignKey: {
                name: 'userId',
            },
        });
    };

    return About;
};
