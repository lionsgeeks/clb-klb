import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';

const newsLetters = () => {
    const breadcrumbs = [
        { title: 'Dashboard', href: '/admin/dashboard' },
        { title: 'News Letters', href: '/admin/newsletter' },
    ];
    const { data, setData, post, processing } = useForm({
        // title: '',
        subject: '',
        // content: '',
    });
    const submit = (e) => {
        e.preventDefault();
        post('/admin/newsletter/send' , {data} , {});
    };
    return (
        <>
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="NewsLetters" />
                <div style={{ maxWidth: '600px', margin: '40px auto' }}>
                    <h1>Newsletter</h1>

                    <form onSubmit={submit}>
                        {/* <input
                placeholder="Titre"
                value={data.title}
                onChange={e=>setData('title',e.target.value)}
                /> */}

                        <input
                            placeholder="Subject"
                            value={data.subject}
                            onChange={(e) => setData('subject', e.target.value)}
                        />

                        {/* <textarea
                placeholder="Content"
                value={data.content}
                onChange={e=>setData('content',e.target.value)}
                /> */}
                        <button disabled={processing}>Envoyer</button>
                    </form>
                </div>
            </AppLayout>
        </>
    );
};

export default newsLetters;
