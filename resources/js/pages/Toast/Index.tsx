import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import route from 'ziggy-js';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Toast',
        // href: dashboard().url,
        href: '/toast',
    },
];

export default function Index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Toast" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid cupiditate harum eos iusto quos omnis ad est enim iure placeat deserunt accusantium, ducimus fuga repellendus blanditiis maxime debitis nulla ullam?</p>
                {/* <Link href={route('toast.create')}><Button>Create Toast</Button></Link> */}
                <Link href="/toast/create"><Button>Create Toast</Button></Link>
            </div>
        </AppLayout>
    );
}