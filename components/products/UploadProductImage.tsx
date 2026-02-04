"use client"

import {useDropzone} from "react-dropzone";
import {useCallback} from "react";

export default function UploadProductImage(){
    const onDrop = useCallback(async (files: File[])=>{
        const formData = new FormData();
        files.forEach(file=>{
            formData.append('file', file.name);
        })
    },[])
    const {getRootProps, getInputProps, isDragActive,isDragReject,isDragAccept} = useDropzone({
        accept: {
            'image/jpeg' : ['.jpg'],
            'image/png' : ['.png'],
            'image/gif' : ['.gif'],
        },
        onDrop,
        maxFiles: 1
    })
    return(
        <>
            <div className="space-y-1">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                    Imagen Producto
                </label>
                <div {...getRootProps({
                    className: `
            py-20 border-2 border-dashed  text-center 
            ${isDragActive ? 'border-gray-900 text-gray-900 bg-gray-200 ' : 'border-gray-400 text-gray-400 bg-white'} 
            ${isDragReject ? 'border-none bg-white' : 'cursor-not-allowed'}
        `})}>
                    <input {...getInputProps()} />
                    {isDragAccept && (<p>Suelta la Imagen</p>)}
                    {isDragReject && (<p>Archivo no válido</p>)}
                    {!isDragActive && (<p>Arrastra y suelta una imagen aquí</p>)}
                </div>
            </div>
        </>
    )
}