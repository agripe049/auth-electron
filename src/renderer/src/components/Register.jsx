import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'; 
import * as Yup from 'yup'; 
import { useNavigate } from 'react-router-dom';
import axios from "axios"; 
import Header from './Header';

const schema = Yup.object().shape({
    username: Yup.string().required('Nome é obrigatório'),
    email: Yup.string().email('Email inválido').required('Email é obrigatório'),
    password: Yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('Senha é obrigatória'),
});

const Registro = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:3000/register', data);
            console.log(response.data);
            navigate('/');
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Nome</label>
                    <input {...register('username')} />
                    <p>{errors.username?.message}</p>
                </div>
                <div>
                    <label>Email</label>
                    <input {...register('email')} />
                    <p>{errors.email?.message}</p>
                </div>
                <div>
                    <label>Senha</label>
                    <input type="password" {...register('password')} />
                    <p>{errors.password?.message}</p>
                </div>
                <button type="submit">Registrar</button>
            </form>
            <Header />
        </div>
    );
};

export default Registro;
