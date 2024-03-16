import forMe from '@/assets/images/icons/plan-card/for-me.svg';
import forSomeone from '@/assets/images/icons/plan-card/for-someone.svg';

export const steps = [
    {
        id: 1,
        name: 'Planes y coberturas'
    },
    {
        id: 2,
        name: 'Resumen'
    }
]

export const planCards = [
    {
        id: 1,
        name: 'Para mí',
        description: 'Cotiza tu seguro de salud y agrega familiares si así lo deseas.',
        icon: forMe,
        isSelected: false
    },
    {
        id: 2,
        name: 'Para alguien más',
        description: 'Realiza una cotización para uno de tus familiares o cualquier persona.',
        icon: forSomeone,
        isSelected: false
    },
]

export const documentTypes = [
    { id: '1', label: "DNI", value: "DNI" },
    { id: '2', label: "C.E.", value: "C.E." }
];

export const validationMessages = {
    phoneRequired: 'Es necesario que ingreses un número celular',
    phoneFormat: 'Formato de número celular incorrecto',
    dniRequired: 'Es necesario que ingreses un número de DNI',
    dniCharacters: 'Número de DNI debe tener 8 caracteres',
    ceRequired: 'Es necesario que ingreses un número de C.E.',
    ceMinCharacters: 'Número de C.E. debe tener como mínimo 6 caracteres',
    ceMaxCharacters: 'Número de C.E. debe tener como máximo 20 caracteres',
    commercialAccept: 'Debe aceptar la política de comunicaciones comerciales',
    privacyAccept: 'Debe aceptar la política de privacidad',
    onlyNumber: 'Solo se permiten números',
    required: 'El campo es requerido'
}