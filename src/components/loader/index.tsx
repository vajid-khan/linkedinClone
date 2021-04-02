import { useTheme } from "@shopify/restyle";
import React from "react";
import {ActivityIndicator} from "react-native";
import { Box, Text, Theme } from "../../theme";

interface Props{
    size?: 'large' | 'small';
    message?:string;
}

const Loader:React.FC<Props> = (props) => {

    const theme = useTheme<Theme>();

    return (
        <Box flex={1} justifyContent={"center"} alignItems={'center'}>
            { props.message && <Text>{props.message}</Text> }
            <ActivityIndicator color={theme.colors.secondary} size={props.size}/>
        </Box>
    )
}
export default Loader;