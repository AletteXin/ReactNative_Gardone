import React, { useState } from "react";
import { Text, View, TextInput, Button, Alert, Form } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Formik } from 'formik';


const Adddeadline = () => {
    // const { control, handleSubmit, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);

    const [description, setdescription] = useState('');
    const [subject, setSubject] = useState('');
    const [date, setdate] = useState('');

    // const sendData = (values) => {
    //     const response = await fetch('/add_deadline', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: values
    //     })

    //     if (response.ok) {
    //         console.log('response work')
    //     }
    // }

    return (
        <Formik
            initialValues={{ description: '', subject: '', date: '' }}
            onSubmit={values => sendData(values)}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                    <InputBox
                        label = "Text"
                        placeholder="Chapter 1 paragraph"
                        onChangeText={handleChange('description')}
                        onBlur={handleBlur('description')}
                        value={values.description}
                        onChange={e => setdescription(e.target.value)}
                    />
                    <InputBox
                        label = "Subject"
                        placeholder="Mathematics"
                        onChangeText={handleChange('subject')}
                        onBlur={handleBlur('subject')}
                        value={values.subject}
                        onChange={e => setSubject(e.target.value)}
                    />
                    <InputBox
                        label="Due date and time"
                        placeholder = "2021-07-27"
                        onChangeText={handleChange('date')}
                        onBlur={handleBlur('date')}
                        value={values.date}
                        onChange={e => setdate(e.target.value)}
                    />
                    <Button title="Submit" color='#0000c8' onPress = { async () => {
                        console.log(values)
                        const response = await fetch("http://192.168.0.152:5000/add_deadline", {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: values
                    })

                        if (response.ok) {
                            console.log('response work')}
                        }} />
                </View>
            )}
        </Formik>



    );
};


export const InputBox = (props) => {

    return (
        <View>
            <Text style={{ 
                paddingVertical: 10, 
                paddingHorizontal: 0, 
                fontSize: 18 }}>
                {props.label}
            </Text >
            <TextInput
                style={{ 
                    padding: 8, 
                    backgroundColor: '#f5f5f5',
                    width: '100%', 
                }}
                onChangeText={props.onChangeText}
                value={props.value}
                placeholder={props.placeholder}
            />
        </View>
    )
}


export default Adddeadline;


