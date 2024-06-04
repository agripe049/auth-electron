function Register() {
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue="test" {...register("example")} />

                
                <input {...register("exampleRequired", { required: true })} />
                
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    )
}

export default Register;