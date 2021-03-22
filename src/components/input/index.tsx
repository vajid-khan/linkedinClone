import React from "react";
import {TextInput, TextInputProps} from "react-native";
import { Box } from "../../theme";


interface Props extends TextInputProps{
    containerStyle?:{}
}

const componentName:React.FC<Props> = ({containerStyle,...rest}) => {
    return (
        <Box paddingVertical={'sm'} paddingHorizontal={'s'} style={containerStyle}>
            <TextInput
                {...rest}
                underlineColorAndroid={'transparent'}
                style={{
                    fontSize: 20,
                    // borderBottomWidth: 1,
                    // borderBottomColor: '#000',
                  
                }}
            />
        </Box>
    )
}
export default componentName;