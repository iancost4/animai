'use client'

import {
  CalendarIcon,
  MapPinIcon,
} from '@heroicons/react/20/solid'
import { Container } from "@/components/container";
import { Heading } from "@/components/text";
import { useEffect, useState } from "react";

const events = [
  {
    id: 1,
    date: 'De 02 a 04 de Dezembro, 2024',
    time: '09:00 ás 12:00',
    datetime: ['2024-12-02T09:00', '2024-12-03T09:00', '2024-12-04T09:00'],
    person: 'João Paulo Barreto',
    name: 'Workshop 08: Crítica Cinematográfica com foco na Animação',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    location: 'Espaço Nelson Maleiro',
  },
  {
    id: 2,
    date: 'De 04 a 06 de Dezembro, 2024',
    datetime: ['2024-12-04T12:00', '2024-12-05T12:00', '2024-12-06T12:00'],
    person: 'Murilo Brito - Pedro Henrique Coxa - Juliana Brito - Ivan Sendin',
    name: 'Rodada de Negócios com Plays de Animação e Games - Parceria Nordeste Lab',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80',
    location: 'Cine Glauber Rocha',
  },
  {
    id: 3,
    date: 'De 05 á 07 de Dezembro, 2024',
    time: '09:00 ás 12:00',
    datetime: ['2024-12-05T09:00', '2024-12-06T09:00', '2024-12-07T09:00'],
    person: 'Murilo Vallota Gonçalves - Pedro Henrique Coxa - Juliana Brito - Ivan Sendin',
    name: 'Painel - Mesa 04: Encontro com Publishers',
    imageUrl: 'https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80',
    location: 'Cine Glauber Rocha',
  },
  {
    id: 4,
    date: 'De 05 á 07 de Dezembro, 2024',
    time: '09:00 ás 12:00',
    datetime: ['2024-12-05T09:00', '2024-12-06T09:00', '2024-12-07T09:00'],
    person: 'Mariana Ferrari',
    name: 'Oficina: O Universo da Voz - Parceria Nina Produções',
    imageUrl: 'https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80',
    location: 'Cineteatro 2 de Julho',
  },
  {
    id: 5,
    date: '05 de Dezembro, 2024',
    time: '10:20 ás 12:00',
    datetime: ['2024-12-05T10:20'],
    person: 'Tharcisio Vaz',
    name: 'Palestra 03: Produção de Voz e Som para games - Parceria Nina Produções',
    imageUrl: 'https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80',
    location: 'Cineteatro 2 de Julho',
  },
  {
    id: 6,
    date: '05 de Dezembro, 2024',
    time: '14:00 ás 15:30',
    datetime: ['2024-12-05T14:20'],
    person: 'Anima Mundi com Aida Queiroz e César Coelho',
    name: 'Palestra 02: Os Desafios de um Grande Festival',
    imageUrl: 'https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80',
    location: 'Cineteatro 2 de Julho',
  },
  {
    id: 7,
    date: '05 de Dezembro, 2024',
    time: '16:00 ás 17:00',
    datetime: ['2024-12-05T16:00'],
    person: 'Mostra Competitiva',
    name: 'Mostra Curtas Baianos',
    imageUrl: 'https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80',
    location: 'Cineteatro 2 de Julho',
  },
  {
    id: 8,
    date: '05 de Dezembro, 2024',
    time: '19:00',
    datetime: ['2024-12-05T19:00'],
    person: 'Sérgio Machado',
    name: 'Cerimônia de Abertura - Filme: A Arca de Noé',
    imageUrl: 'https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80',
    location: 'Cine Glauber Rocha',
  },
  {
    id: 9,
    date: '06 de Dezembro, 2024',
    time: '19:00',
    datetime: ['2024-12-06T19:00'],
    person: 'Exibição do Longa: Bizarros Peixes das Fossas Abissais com Marcelo Marão',
    name: 'Sessão 03: Mostra Competitiva de Animação',
    imageUrl: 'https://images.unsplash.com/photo-1502764613149-7f1d229e230f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80',
    location: 'Cine Glauber Rocha',
  },
  {
    id: 10,
    date: '07 de Dezembro, 2024',
    time: '14:00 ás 20:00',
    datetime: ['2024-12-07T14:00'],
    name: 'Mostra Competitiva de Games',
    imageUrl: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80',
    location: 'Cine Glauber Rocha',
  },
  {
    id: 11,
    date: '07 de Dezembro, 2024',
    time: '15:00',
    datetime: ['2024-12-07T15:00'],
    name: 'Sessão 01: Mostra Competitiva de Animação',
    person: 'Ingressos e programação completa no local',
    imageUrl: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80',
    location: 'Cine Glauber Rocha',
  },
  {
    id: 12,
    date: '07 de Dezembro, 2024',
    time: '17:00',
    datetime: ['2024-12-07T17:00'],
    name: 'Sessão 02: Mostra Competitiva de Animação',
    person: 'Ingressos e programação completa no local',
    imageUrl: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80',
    location: 'Cine Glauber Rocha',
  },
  {
    id: 13,
    date: '06 de Dezembro, 2024',
    time: '14:00 ás 20:00',
    datetime: ['2024-12-06T14:00'],
    name: 'Mostra Competitiva de Games',
    imageUrl: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80',
    location: 'Cine Glauber Rocha',
  },
  {
    id: 14,
    date: '06 de Dezembro, 2024',
    time: '14:00',
    datetime: ['2024-12-07T14:00'],
    name: 'Sessão 01: Mostra Competitiva de Animação',
    person: 'Ingressos e programação completa no local',
    imageUrl: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80',
    location: 'Cine Glauber Rocha',
  },
  {
    id: 15,
    date: '06 de Dezembro, 2024',
    time: '15:00',
    datetime: ['2024-12-07T15:00'],
    name: 'Sessão 02: Mostra Competitiva de Animação',
    person: 'Ingressos e programação completa no local',
    imageUrl: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80',
    location: 'Cine Glauber Rocha',
  },
  {
    id: 16,
    date: '06 de Dezembro, 2024',
    time: '16:00',
    datetime: ['2024-12-07T15:00'],
    name: 'Lançamento do Livro - Panorama da Animação de Salvador',
    person: 'Autor: Ricardo Araujo - Professores Orientadores: Paulo Miguel e Natacha Canesso',
    imageUrl: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80',
    location: 'Cine Glauber Rocha',
  },
  {
    id: 17,
    date: '06 de Dezembro, 2024',
    time: '17:00',
    datetime: ['2024-12-07T17:00'],
    name: 'Sessão 03: Mostra Competitiva de Animação',
    person: 'Ingressos e programação completa no local',
    imageUrl: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80',
    location: 'Cine Glauber Rocha',
  },
  {
    id: 18,
    date: '06 de Dezembro, 2024',
    time: '19:00',
    datetime: ['2024-12-07T17:00'],
    name: 'Sessão 04: Mostra Competitiva de Animação - Longa: A Lasanha Assassina ',
    person: 'Alê Machaddo (dr.)',
    imageUrl: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80',
    location: 'Cine Glauber Rocha',
  },
  {
    id: 19,
    date: '08 de Dezembro, 2024',
    time: '14:00 ás 20:00',
    datetime: ['2024-12-08T14:00'],
    name: 'Mostra Competitiva de Games',
    imageUrl: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80',
    location: 'Cine Glauber Rocha',
  },
  {
    id: 20,
    date: '08 de Dezembro, 2024',
    time: '14:00',
    datetime: ['2024-12-08T14:00'],
    name: 'Sessão 01: Mostra Competitiva de Animação',
    person: 'Ingressos e programação completa no local',
    imageUrl: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80',
    location: 'Cine Glauber Rocha',
  },
  {
    id: 21,
    date: '08 de Dezembro, 2024',
    time: '16:00',
    datetime: ['2024-12-08T16:00'],
    name: 'Sessão 02: Mostra Competitiva de Animação',
    person: 'Ingressos e programação completa no local',
    imageUrl: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80',
    location: 'Cine Glauber Rocha',
  },
  {
    id: 21,
    date: '08 de Dezembro, 2024',
    time: '18:00 ás 20:30',
    datetime: ['2024-12-08T18:00'],
    name: 'Cerimônia de Premiação Exibição',
    person: 'Meu Tio José - Homenageado do Ano com a presença de Ducca Rios',
    imageUrl: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80',
    location: 'Cine Glauber Rocha',
  },
  {
    id: 22,
    date: '08 de Dezembro, 2024',
    time: '20:30 ás 22:00',
    datetime: ['2024-12-08T20:30'],
    name: 'Festa de Encerramento Animaí',
    imageUrl: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80',
    location: 'Cine Glauber Rocha',
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Events() {
    const [days, setDays] = useState([
      { date: '2024-12-01', isCurrentMonth: false, isSelected: false, isToday: false },
      { date: '2024-12-02', isCurrentMonth: true, isSelected: false, isToday: false },
      { date: '2024-12-03', isCurrentMonth: true, isSelected: false, isToday: false },
      { date: '2024-12-04', isCurrentMonth: true, isSelected: false, isToday: false },
      { date: '2024-12-05', isCurrentMonth: true, isSelected: false, isToday: false },
      { date: '2024-12-06', isCurrentMonth: true, isSelected: false, isToday: false },
      { date: '2024-12-07', isCurrentMonth: true, isSelected: false, isToday: false },
      { date: '2024-12-08', isCurrentMonth: true, isSelected: false, isToday: false },
      { date: '2024-12-09', isCurrentMonth: false, isSelected: false, isToday: false },
      { date: '2024-12-10', isCurrentMonth: false, isSelected: false, isToday: false },
      { date: '2024-12-11', isCurrentMonth: false, isSelected: false, isToday: false },
      { date: '2024-12-12', isCurrentMonth: false, isSelected: false, isToday: false },
      { date: '2024-12-13', isCurrentMonth: false, isSelected: false, isToday: false },
      { date: '2024-12-14', isCurrentMonth: false, isSelected: false, isToday: false },
      { date: '2024-12-15', isCurrentMonth: false, isSelected: false, isToday: false },
      { date: '2024-12-16', isCurrentMonth: false, isSelected: false, isToday: false },
      { date: '2024-12-17', isCurrentMonth: false, isSelected: false, isToday: false },
      { date: '2024-12-18', isCurrentMonth: false, isSelected: false, isToday: false },
      { date: '2024-12-19', isCurrentMonth: false, isSelected: false, isToday: false },
      { date: '2024-12-20', isCurrentMonth: false, isSelected: false, isToday: false },
      { date: '2024-12-21', isCurrentMonth: false, isSelected: false, isToday: false },
      { date: '2024-12-22', isCurrentMonth: false, isSelected: false, isToday: false },
      { date: '2024-12-23', isCurrentMonth: false, isSelected: false, isToday: false },
      { date: '2024-12-24', isCurrentMonth: false, isSelected: false, isToday: false },
      { date: '2024-12-25', isCurrentMonth: false, isSelected: false, isToday: false },
      { date: '2024-12-26', isCurrentMonth: false, isSelected: false, isToday: false },
      { date: '2024-12-27', isCurrentMonth: false, isSelected: false, isToday: false },
      { date: '2024-12-28', isCurrentMonth: false, isSelected: false, isToday: false },
      { date: '2024-12-29', isCurrentMonth: false, isSelected: false, isToday: false },
      { date: '2024-12-30', isCurrentMonth: false, isSelected: false, isToday: false },
      { date: '2024-12-31', isCurrentMonth: false, isSelected: false, isToday: false },
      { date: '2022-01-01', isCurrentMonth: false, isSelected: false, isToday: false },
      { date: '2022-01-02', isCurrentMonth: false, isSelected: false, isToday: false },
      { date: '2022-01-03', isCurrentMonth: false, isSelected: false, isToday: false },
      { date: '2022-01-04', isCurrentMonth: false, isSelected: false, isToday: false },
    ]);

    useEffect(() => {
      const today = new Date()
          .toLocaleDateString('pt-BR', { year: 'numeric', month: '2-digit', day: '2-digit' })
          .split('/')
          .reverse()
          .join('-');

      setDays((prevDays) =>
          prevDays.map((day) => ({
            ...day,
            isToday: day.date === today,
            isSelected: day.date === today,
          }))
      );
    }, []);

  const handleSelectDate = (selectedDate: any) => {
    const exist = days.find((day) => day.date === selectedDate && day.isCurrentMonth);

    if (!exist) return;

    setDays((prevDays) =>
        prevDays.map((day) => ({
          ...day,
          isSelected: day.date === selectedDate,
        }))
    );
  };

  const selectedDay = days.find((day: any) => day.isSelected)?.date;

  const filteredEvents = events.filter((event: any) =>
      event.datetime.some((datetime: any) => datetime.startsWith(selectedDay))
  );

  return (
      <div className="overflow-hidden">
        <Container className="pb-24">
          <Heading as="h2" className="max-w-3xl">
            Programação
          </Heading>
          <div>
            <div className="lg:grid lg:grid-cols-12 lg:gap-x-16">
              <div className="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
                Dezembro
                <div className="mt-6 grid grid-cols-7 text-xs/6 text-gray-500">
                  <div>D</div>
                  <div>S</div>
                  <div>T</div>
                  <div>Q</div>
                  <div>Q</div>
                  <div>S</div>
                  <div>S</div>
                </div>
                <div
                    className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
                  {days.map((day, dayIdx) => (
                      <button
                          key={day.date}
                          type="button"
                          onClick={() => handleSelectDate(day.date)}
                          className={classNames(
                              'py-1.5 hover:bg-gray-100 focus:z-10',
                              day.isCurrentMonth ? 'bg-white' : 'bg-gray-50',
                              (day.isSelected || day.isToday) && 'font-semibold',
                              day.isSelected && 'text-white',
                              !day.isSelected && day.isCurrentMonth && !day.isToday && 'text-gray-900',
                              !day.isSelected && !day.isCurrentMonth && !day.isToday && 'text-gray-400',
                              day.isToday && !day.isSelected && 'text-indigo-600',
                              dayIdx === 0 && 'rounded-tl-lg',
                              dayIdx === 6 && 'rounded-tr-lg',
                              dayIdx === days.length - 7 && 'rounded-bl-lg',
                              dayIdx === days.length - 1 && 'rounded-br-lg',
                          )}
                      >
                        <time
                            dateTime={day.date}
                            className={classNames(
                                'mx-auto flex size-7 items-center justify-center rounded-full',
                                day.isSelected && day.isToday && 'bg-indigo-600',
                                day.isSelected && !day.isToday && 'bg-gray-900',
                            )}
                        >
                          {typeof day.date === 'string' ? day.date.split('-').pop()?.replace(/^0/, '') : ''}
                        </time>
                      </button>
                  ))}
                </div>
              </div>
              <ol className="mt-4 divide-y divide-gray-100 text-sm/6 lg:col-span-7 xl:col-span-8">
                {filteredEvents.length > 0 ? (
                    filteredEvents.map((event: any) => (
                        <li key={event.id} className="relative flex space-x-6 py-6 xl:static">
                          <img
                              className="h-20"
                              alt="imagem"
                              src="https://static.vecteezy.com/ti/vecteur-libre/p1/2318271-icone-de-profil-utilisateur-vectoriel.jpg"
                          />
                          <div className="flex-auto">
                            <h3 className="pr-10 font-semibold text-gray-900 xl:pr-0">{event.name}</h3>
                            <h3 className="pr-10 text-gray-900 xl:pr-0">{event.person}</h3>
                            <dl className="mt-2 flex flex-col text-gray-500 xl:flex-row">
                              <div className="flex items-start space-x-3">
                                <dt className="mt-0.5">
                                  <span className="sr-only">Date</span>
                                  <CalendarIcon className="size-5 text-gray-400" aria-hidden="true"/>
                                </dt>
                                <dd>
                                  <time>
                                    {event.date} às {event.time}
                                  </time>
                                </dd>
                              </div>
                              <div
                                  className="mt-2 flex items-start space-x-3 xl:ml-3.5 xl:mt-0 xl:border-l xl:border-gray-400/50 xl:pl-3.5">
                                <dt className="mt-0.5">
                                  <span className="sr-only">Location</span>
                                  <MapPinIcon className="size-5 text-gray-400" aria-hidden="true"/>
                                </dt>
                                <dd>{event.location}</dd>
                              </div>
                            </dl>
                          </div>
                        </li>
                    ))
                ) : (
                    <p className="text-center text-gray-500">Nenhum evento neste dia</p>
                )}
              </ol>
            </div>
          </div>
        </Container>
      </div>

  )
}