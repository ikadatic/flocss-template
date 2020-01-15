module.exports = {
    plugins: ['stylelint-scss', 'stylelint-order'],
    extends: [
        'stylelint-config-standard',
        'stylelint-config-rational-order'
    ],
    rules: {
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': true,
    }
};