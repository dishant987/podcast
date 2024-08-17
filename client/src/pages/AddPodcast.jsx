import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { useState } from "react";
import { FileUpload } from "../components/ui/file-upload";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { Textarea } from "../components/ui/textarea";
import SparklesText from "../components/magicui/sparkles-text";

const formSchema = z.object({
    title: z.string().min(2, "Title must be at least 2 characters").max(100),
    description: z.string().min(10, "Description must be at least 10 characters"),
    category: z.string().nonempty("Category is required"),

});

export default function AddPodcast() {
    const [file, setFile] = useState(null);
    const [audioFile, setAudioFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleAudioFile = () => {

    }

    const handleFileUpload = (files) => {
        setError("");
        if (files.length > 0) {
            setFile(files[0]); // Handle single file
        }
    };

    const handleCancel = () => {
        setError("");
        setFile(null); // Clear the file
    };

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
            category: "",

        },
    });

    const handleSubmit = async (data) => {
        setLoading(true);
        setError("");
        console.log(data);

        if (!file) {
            setError("Please upload a thumbnail image.");
            setLoading(false);
            return;
        }
        try {
            const formData = new FormData();
            formData.append("title", data.title);
            formData.append("description", data.description);
            formData.append("category", data.category);

            if (file) {
                formData.append("thumbnail", file);
            }
            console.log(formData);
            console.log(file);

            const res = await axios.post(`${import.meta.env.VITE_BACKEND_URI}1/podcasts`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            if (res.status === 201) {
                toast.success("Podcast uploaded successfully");
                navigate("/podcasts");
            }
        } catch (error) {
            toast.error("Failed to upload podcast");
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card className="dark:bg-black max-w-[850px] mt-10 mx-auto sm:max-w-full sm:m-4 bg-white shadow-input rounded-3xl p-6">
            <CardHeader>
                <CardTitle className="text-center"><SparklesText className=" text-4xl md:text-6xl" text="Add Podcast" /></CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row gap-8">
                <div className="flex flex-col items-center md:w-1/2">
                    <FileUpload onChange={handleFileUpload} cancelState={!file} onCancel={handleCancel} setError={setError} />
                </div>
                <div className="md:w-1/2 space-y-6 mt-4 md:mt-16">

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter podcast title" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                            <Textarea {...field} placeholder="Write a brief description of podcast" className="mt-2" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="category"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Category</FormLabel>
                                        <Select onValueChange={field.onChange}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select category" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="technology">Technology</SelectItem>
                                                <SelectItem value="education">Education</SelectItem>
                                                <SelectItem value="entertainment">Entertainment</SelectItem>
                                                {/* Add more categories as needed */}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {error && (
                                <p className="text-center text-sm text-red-500 dark:text-red-400">
                                    {error}
                                </p>
                            )}

                            <FormItem>
                                <FormLabel>Audio File</FormLabel>
                                <FormControl>
                                    <Input className=" dark:text-white" type="file"
                                        onChange={(e) => handleAudioFile(e.target.files)}
                                        accept="audio/*" />
                                </FormControl>

                            </FormItem>
                            <Button className="w-full" type="submit" disabled={loading}>
                                {loading ? "Uploading..." : "Submit Podcast"}
                            </Button>
                        </form>
                    </Form>
                </div>
            </CardContent>
        </Card>
    );
}
