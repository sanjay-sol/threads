"use client";
import { Form } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
interface Props {
    user: {
        id: string,
        objectId: string,
        username: string,
        name: string,
        bio: string,
        image: string,
    },
    btnTitle: string



    }
const AccountProfile = ({ user, btnTitle } : Props) => {
    const form = useForm();
    return (
        <Form>

        </Form>
    )
}

export default AccountProfile