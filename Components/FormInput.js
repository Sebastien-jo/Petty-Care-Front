import React from "react";
import {View, TextInput, Text} from "react-native";
import {Controller} from "react-hook-form";
import Style from "../Style";

const FormInput = ({control, name, rules={}, placeholder, secureTextEntry}) => {
    return (
        <View>
            <Controller
                control={control}
                name={name}
                rules={rules}
                render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
                    <>
                    <View>
                        <TextInput
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        placeholder={placeholder}
                        secureTextEntry={secureTextEntry}
                        style={[Style.labelText, {borderColor: error ? "#FF6480" : "151515"}]}
                        />
                    </View>
                    {error && (
                        <Text style={Style.errorText}>{error.message}</Text>
                    )}
                    </>
                )}
            />
        </View>
    )
}

export default FormInput