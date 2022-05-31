import React from "react";
import { yupResolver } from '@hookform/resolvers/yup'
import QuantityField from "./form-controls/QuantityField";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
const AddToCartForm = ({onSubmit = null}) => {
    const schema = yup.object().shape({
  quantity: yup.number().min(1, 'Minimum value is 1').required('Please enter quantity').typeError('please enter a number')
})
const form = useForm({
    defaultValues: {
      quantity : 1,
    },
    resolver: yupResolver(schema),
});
const handleSubmit = async (values) => {
    if(onSubmit) {
        await onSubmit(values)
    }
}
    return (
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <QuantityField name="quantity" label="Quantity" form={form}/>
        <Button type ="submit"> Add to cart</Button>
      </form>
    );
}
export default AddToCartForm;
