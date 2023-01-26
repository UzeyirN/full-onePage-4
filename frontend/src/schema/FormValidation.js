import * as yup from "yup";

const schema = yup.object().shape({
    image: yup.string().required("Enter value !"),
    title: yup.string().required("Enter value !"),
    content: yup.string().required("Enter value !"),
    authorPhoto: yup.string().required("Enter value !"),
    authorName: yup.string().required("Enter value !"),
    price: yup.number().required("Enter value !").positive("Enter positive value !").integer(),


});

export default schema