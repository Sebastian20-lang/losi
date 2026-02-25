import { Head } from '@inertiajs/react';
import {
    Bell,
    Briefcase,
    Building2,
    Calendar,
    ChevronDown,
    ChevronRight,
    Circle,
    Cog,
    Eye,
    Fingerprint,
    KeyRound,
    LayoutDashboard,
    Search,
    User,
    Users,
} from 'lucide-react';
import { useState } from 'react';
import type { ComponentType } from 'react';

type SidebarItem = {
    label: string;
    icon: ComponentType<{ className?: string }>;
    active?: boolean;
};

type SidebarSection = {
    title: string;
    expanded: boolean;
    items: SidebarItem[];
};

type TeamCard = {
    title: string;
    total: number;
    subtitle: string;
    icon: ComponentType<{ className?: string }>;
};

type Employee = {
    name: string;
    email: string;
    type: string;
    role: string;
    department: string;
    status: 'Activo' | 'Inactivo';
};

type MainTab = 'recursos' | 'soporte' | 'comunidad';
type HrTab = 'personal' | 'desempeno' | 'objetivos' | 'auditoria';
type ViewTab = 'galeria' | 'tabla';

const topSections: SidebarSection[] = [
    {
        title: 'PANEL',
        expanded: true,
        items: [
            { label: 'Inicio', icon: LayoutDashboard },
            { label: 'Calendario', icon: Calendar },
            { label: 'Notificaciones', icon: Bell },
        ],
    },
    {
        title: 'COMERCIAL (CRM)',
        expanded: true,
        items: [{ label: 'CRM', icon: Briefcase }],
    },
    {
        title: 'OPERACIONES / PROYECTOS',
        expanded: false,
        items: [],
    },
    {
        title: 'FINANZAS',
        expanded: false,
        items: [],
    },
    {
        title: 'GESTION INTERNA (RRHH & OPS)',
        expanded: true,
        items: [{ label: 'Gestion Interna', icon: Building2, active: true }],
    },
    {
        title: 'DOCUMENTACION',
        expanded: false,
        items: [],
    },
];

const securityItems: SidebarItem[] = [
    { label: 'Analitica Web', icon: Eye },
    { label: 'Auditoria', icon: Circle },
    { label: 'Permisos', icon: KeyRound },
    { label: 'Config. Facial', icon: Fingerprint },
    { label: 'Configuracion', icon: Cog },
];

const teamCards: TeamCard[] = [
    { title: 'Total Personal', total: 1, subtitle: 'Empleados registrados', icon: Users },
    { title: 'Instructores', total: 1, subtitle: 'Equipo docente', icon: User },
    { title: 'Desarrolladores', total: 0, subtitle: 'Equipo tecnico', icon: User },
    { title: 'Administradores', total: 0, subtitle: 'Personal administrativo', icon: User },
    { title: 'Asist. Administrativos', total: 0, subtitle: 'Personal de soporte', icon: User },
];

const employees: Employee[] = [
    {
        name: 'Carlos',
        email: 'carlos@internum.com',
        type: 'Instructor',
        role: 'Coordinador de Contenidos',
        department: 'Desarrollo',
        status: 'Activo',
    },
];

const mainTabs: Array<{ id: MainTab; label: string }> = [
    { id: 'recursos', label: 'Recursos Humanos' },
    { id: 'soporte', label: 'Soporte' },
    { id: 'comunidad', label: 'Comunidad' },
];

const hrTabs: Array<{ id: HrTab; label: string }> = [
    { id: 'personal', label: 'Personal' },
    { id: 'desempeno', label: 'Desempeno' },
    { id: 'objetivos', label: 'Objetivos' },
    { id: 'auditoria', label: 'Auditoria' },
];

export default function SidebarDemo() {
    const [activeMainTab, setActiveMainTab] = useState<MainTab>('recursos');
    const [activeHrTab, setActiveHrTab] = useState<HrTab>('personal');
    const [activeViewTab, setActiveViewTab] = useState<ViewTab>('galeria');

    const showHrPanel = activeMainTab === 'recursos' && activeHrTab === 'personal';

    return (
        <>
            <Head title="Gestion Interna" />

            <main className="min-h-screen bg-[#f3f5f8] text-[#4f5f70]">
                <div className="flex min-h-screen">
                    <aside className="w-[290px] shrink-0 border-r border-[#d8dde3] bg-[#f3f5f8]">
                        <div className="border-b border-[#d8dde3] px-4 py-4">
                            <h1 className="text-[20px] font-semibold leading-none text-[#37485b]">Dashboard</h1>
                            <p className="mt-1 text-[13px] font-medium text-[#7e8d9e]">Panel de Administracion</p>
                        </div>

                        <div className="space-y-5 px-3 py-4">
                            {topSections.map((section) => (
                                <section key={section.title}>
                                    <button
                                        type="button"
                                        className="flex w-full items-center justify-between px-1 text-left text-[12px] font-semibold tracking-wide text-[#8896a6]"
                                    >
                                        <span>{section.title}</span>
                                        {section.expanded ? (
                                            <ChevronDown className="h-3.5 w-3.5" />
                                        ) : (
                                            <ChevronRight className="h-3.5 w-3.5" />
                                        )}
                                    </button>

                                    {section.items.length > 0 && (
                                        <ul className="mt-2 space-y-1">
                                            {section.items.map((item) => {
                                                const Icon = item.icon;
                                                const isGestionInterna = item.label === 'Gestion Interna';

                                                return (
                                                    <li key={item.label}>
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                if (isGestionInterna) {
                                                                    setActiveMainTab('recursos');
                                                                    setActiveHrTab('personal');
                                                                    setActiveViewTab('galeria');
                                                                }
                                                            }}
                                                            className={`flex w-full items-center gap-2 rounded-md border px-3 py-2 text-[14px] font-medium transition ${
                                                                item.active
                                                                    ? 'border-[#9bc2dc] bg-[#d6eaf7] text-[#4d8bb8]'
                                                                    : 'border-transparent text-[#607286] hover:border-[#d8dde3] hover:bg-[#e8edf3]'
                                                            }`}
                                                        >
                                                            <Icon className="h-4 w-4" />
                                                            <span>{item.label}</span>
                                                        </button>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    )}
                                </section>
                            ))}

                            <section>
                                <button
                                    type="button"
                                    className="flex w-full items-center justify-between px-1 text-left text-[12px] font-semibold tracking-wide text-[#8896a6]"
                                >
                                    <span>SISTEMA Y SEGURIDAD</span>
                                    <ChevronDown className="h-3.5 w-3.5" />
                                </button>

                                <ul className="mt-2 space-y-1">
                                    {securityItems.map((item) => {
                                        const Icon = item.icon;

                                        return (
                                            <li key={item.label}>
                                                <a
                                                    href="#"
                                                    className="flex items-center gap-2 rounded-md border border-transparent px-3 py-2 text-[14px] font-medium text-[#607286] transition hover:border-[#d8dde3] hover:bg-[#e8edf3]"
                                                >
                                                    <Icon className="h-4 w-4" />
                                                    <span>{item.label}</span>
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </section>
                        </div>
                    </aside>

                    <section className="flex-1 p-6">
                        <div className="rounded-xl border border-[#dce2ea] bg-white p-6">
                            <div className="mb-4">
                                <h2 className="text-2xl font-semibold text-[#2e4258]">Gestion Interna (RRHH & Ops)</h2>
                                <p className="text-sm text-[#8696a9]">Recursos humanos, soporte al cliente y comunidad</p>
                            </div>

                            <div className="mb-4 flex gap-5 border-b border-[#e6ebf2] text-sm font-semibold">
                                {mainTabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        type="button"
                                        onClick={() => setActiveMainTab(tab.id)}
                                        className={`pb-2 ${
                                            activeMainTab === tab.id
                                                ? 'border-b-2 border-[#3e95cf] text-[#3e95cf]'
                                                : 'text-[#6f8197]'
                                        }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>

                            {activeMainTab === 'recursos' ? (
                                <>
                                    <div className="mb-5 flex gap-5 border-b border-[#e6ebf2] text-sm font-semibold">
                                        {hrTabs.map((tab) => (
                                            <button
                                                key={tab.id}
                                                type="button"
                                                onClick={() => setActiveHrTab(tab.id)}
                                                className={`pb-2 ${
                                                    activeHrTab === tab.id
                                                        ? 'border-b-2 border-[#3e95cf] text-[#3e95cf]'
                                                        : 'text-[#6f8197]'
                                                }`}
                                            >
                                                {tab.label}
                                            </button>
                                        ))}
                                    </div>

                                    {showHrPanel ? (
                                        <>
                                            <div className="mb-5 flex items-center justify-between">
                                                <div>
                                                    <h3 className="text-3xl font-semibold text-[#30465d]">Recursos Humanos</h3>
                                                    <p className="text-sm text-[#8a99aa]">Gestion de personal y empleados</p>
                                                </div>

                                                <div className="flex gap-2">
                                                    <button
                                                        type="button"
                                                        className="rounded-md border border-[#cfd9e7] bg-white px-3 py-2 text-xs font-semibold text-[#4f6a84]"
                                                    >
                                                        Exportar
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="rounded-md bg-[#2f7eb2] px-3 py-2 text-xs font-semibold text-white"
                                                    >
                                                        Agregar Empleado
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-5">
                                                {teamCards.map((card) => {
                                                    const Icon = card.icon;

                                                    return (
                                                        <article
                                                            key={card.title}
                                                            className="rounded-lg border border-[#e0e6ef] bg-[#fbfcfe] p-4"
                                                        >
                                                            <div className="mb-2 flex items-center justify-between text-[#8ea1b6]">
                                                                <p className="text-xs font-semibold">{card.title}</p>
                                                                <Icon className="h-4 w-4" />
                                                            </div>
                                                            <p className="text-3xl font-semibold text-[#2e4156]">{card.total}</p>
                                                            <p className="text-xs text-[#8ea0b4]">{card.subtitle}</p>
                                                        </article>
                                                    );
                                                })}
                                            </div>

                                            <div className="mb-4 flex gap-5 border-b border-[#e6ebf2] text-sm font-semibold">
                                                <button
                                                    type="button"
                                                    onClick={() => setActiveViewTab('galeria')}
                                                    className={`pb-2 ${
                                                        activeViewTab === 'galeria'
                                                            ? 'border-b-2 border-[#3e95cf] text-[#3e95cf]'
                                                            : 'text-[#6f8197]'
                                                    }`}
                                                >
                                                    Galeria de Fotos
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => setActiveViewTab('tabla')}
                                                    className={`pb-2 ${
                                                        activeViewTab === 'tabla'
                                                            ? 'border-b-2 border-[#3e95cf] text-[#3e95cf]'
                                                            : 'text-[#6f8197]'
                                                    }`}
                                                >
                                                    Tabla Detallada
                                                </button>
                                            </div>

                                            <div className="mb-4 flex flex-wrap items-center gap-3">
                                                <label className="relative min-w-[240px] flex-1">
                                                    <Search className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#9aabbd]" />
                                                    <input
                                                        type="text"
                                                        placeholder="Buscar por nombre, email o puesto..."
                                                        className="h-10 w-full rounded-md border border-[#dce3ed] bg-white pl-9 pr-3 text-sm outline-none focus:border-[#8fb8d8]"
                                                    />
                                                </label>
                                                <select className="h-10 min-w-[180px] rounded-md border border-[#dce3ed] bg-white px-3 text-sm">
                                                    <option>Todos los tipos</option>
                                                </select>
                                                <select className="h-10 min-w-[180px] rounded-md border border-[#dce3ed] bg-white px-3 text-sm">
                                                    <option>Todos los estados</option>
                                                </select>
                                            </div>

                                            {activeViewTab === 'galeria' ? (
                                                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-6">
                                                    {employees.map((employee) => (
                                                        <article
                                                            key={employee.email}
                                                            className="rounded-xl border border-[#e1e8f0] bg-white p-4"
                                                        >
                                                            <div className="mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-[#d9eaf7] text-3xl font-semibold text-[#2f7eb2]">
                                                                {employee.name.charAt(0)}
                                                            </div>
                                                            <p className="text-center text-sm font-semibold text-[#30465d]">{employee.name}</p>
                                                            <p className="mt-1 text-center text-xs text-[#4f76b4]">{employee.type}</p>
                                                            <p className="mt-2 text-center text-xs text-[#8ea0b4]">{employee.role}</p>
                                                            <p className="text-center text-xs text-[#8ea0b4]">{employee.department}</p>
                                                        </article>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className="overflow-x-auto rounded-lg border border-[#e1e8f0]">
                                                    <table className="min-w-full bg-white text-sm">
                                                        <thead className="bg-[#f8fafd] text-left text-xs font-semibold text-[#77889c]">
                                                            <tr>
                                                                <th className="px-4 py-3">Nombre</th>
                                                                <th className="px-4 py-3">Email</th>
                                                                <th className="px-4 py-3">Tipo</th>
                                                                <th className="px-4 py-3">Puesto</th>
                                                                <th className="px-4 py-3">Departamento</th>
                                                                <th className="px-4 py-3">Estado</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {employees.map((employee) => (
                                                                <tr
                                                                    key={employee.email}
                                                                    className="border-t border-[#edf1f6] text-[#5f7186]"
                                                                >
                                                                    <td className="px-4 py-3 font-medium text-[#40576f]">
                                                                        {employee.name}
                                                                    </td>
                                                                    <td className="px-4 py-3">{employee.email}</td>
                                                                    <td className="px-4 py-3">{employee.type}</td>
                                                                    <td className="px-4 py-3">{employee.role}</td>
                                                                    <td className="px-4 py-3">{employee.department}</td>
                                                                    <td className="px-4 py-3">
                                                                        <span className="rounded-full bg-[#dcf4e3] px-2 py-1 text-xs font-semibold text-[#2f9c61]">
                                                                            {employee.status}
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <p className="rounded-lg border border-[#e3e9f1] bg-[#f9fbfd] p-4 text-sm text-[#7f90a3]">
                                            Este apartado estara disponible pronto.
                                        </p>
                                    )}
                                </>
                            ) : (
                                <p className="rounded-lg border border-[#e3e9f1] bg-[#f9fbfd] p-4 text-sm text-[#7f90a3]">
                                    Seleccionaste {activeMainTab}. Puedes usar Gestion Interna para volver a Recursos Humanos.
                                </p>
                            )}
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
