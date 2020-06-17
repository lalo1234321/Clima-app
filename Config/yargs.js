let opts=
{
    direccion:
        {
            alias:'d',
            demand:true,
            desc:'Ciudad que desea consultar el clima'
        }
}
const argv=require('yargs')
    .options(opts)
    .help()
    .argv

module.exports=
{
    argv
}