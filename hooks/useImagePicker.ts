import { usePermissions } from './../node_modules/expo-media-library';
import { useState } from "react";

export function useImagePicker(){
    const [ image, setImage ] = useState(undefined);
    const {status, requestPermission} = usePermissions();

    function openImagePicker(){
        alert("Open Image Picker");
    }

    function reset(){
        alert("reset");
    }

    return { image, openImagePicker, reset }
}