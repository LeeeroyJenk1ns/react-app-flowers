import React, { Component } from 'react';

import Header from '../header';
import Content from '../content';
import './app.css';

export default class App extends Component {

    state = {
        data: [
            {
                title: "Красные розы",
                description: "Роза",
                imgSrc: "https://wallbox.ru/resize/1280x1024/wallpapers/main/201306/rozy-kally-cvety-a3282cf.jpg",
                active: true,
                filter: "Розы",
                id: 1
            },
            {
                title: "Розы",
                description: "Роза",
                imgSrc: "https://www.1zoom.ru/big2/13/213003-svetik.jpg",
                active: true,
                filter: "Розы",
                id: 2
            },
            {
                title: "Белые розы",
                description: "Роза",
                imgSrc: "https://www.sunhome.ru/i/cards/16/otkritki-kartinki-so-cvetami.orig.jpg",
                active: true,
                filter: "Розы",
                id: 3
            },
            {
                title: "Тюльпаны",
                description: "Тюльпан",
                imgSrc: "https://avatars.mds.yandex.net/get-pdb/1337375/57005201-9469-428a-9b82-c94464573825/s1200?webp=false",
                active: true,
                filter: "Тюльпаны",
                id: 4
            },
            {
                title: "Сиреневые цветы",
                description: "Сирень",
                imgSrc: "https://avatars.mds.yandex.net/get-pdb/1784982/cf9af26e-2c89-4ef4-98d1-318dc8bf4045/s1200?webp=false",
                active: true,
                filter: "Сирень",
                id: 5
            },
            {
                title: "Красные тюльпаны",
                description: "Тюльпан",
                imgSrc: "https://www.1zoom.ru/big2/977/248562-Sepik.jpg",
                active: true,
                filter: "Тюльпаны",
                id: 6
            }
        ],
        li: [
            {label: "Розы", id: 1, select: true},
            {label: "Тюльпаны", id: 2, select: true},
            {label: "Архидеи", id: 3, select: true},
            {label: "Сирень", id: 4, select: true}
        ]
    };

    onLabelClick = (id) => {
        this.setState(({li, data}) => {
            const idx = li.findIndex(el => el.id === id);

            const oldLi = li[idx];
            const newLi = {...oldLi, select: !oldLi.select};
            const newArrayLi = [
                ...li.slice(0, idx),
                newLi,
                ...li.slice(idx + 1)
            ];

            const newArrayData = [...data];

            newArrayData.forEach((e, i) => {
                    if (e.filter === newArrayLi[idx].label) {
                        if (!newArrayLi[idx].select) {
                            newArrayData[i] = {...newArrayData[i], active: false};
                        } else {
                            newArrayData[i] = {...newArrayData[i], active: true};
                        }
                    }
                });
                
            return {
                li: newArrayLi,
                data: newArrayData
            };
        });
    };

    deleteCard = (id) => {
        this.setState(({ data }) => {
            const idx = data.findIndex(el => el.id === id);
            const oldData = data[idx];
            const newData = {...oldData, active: !oldData.active}
            const newArray = [
                ...data.slice(0, idx),
                newData,
                ...data.slice(idx + 1)
            ];
            
            return {
                data: newArray
            };
        });
    };

    searchCard = (e) => {
        this.setState(({li, data}) => {
            const newLi = li;
            newLi.forEach((e, i) => {
                newLi[i] = {...newLi[i], select: false}
            });
            const newArray = [...data];
            newArray.forEach((el, i) => {
                const arrString = [...el.title.toLowerCase().split(' '), ...el.description.toLowerCase().split(' ')];
                if(arrString.includes(e)) {
                    newArray[i] = {...newArray[i], active: true};
                } else {
                    newArray[i] = {...newArray[i], active: false};
                }
            });
            return {
                li: newLi,
                data: newArray
            };
        });
    };

    render() {
        return (
            <div>
                <Header
                    li={this.state.li}
                    onLabelClick={this.onLabelClick}
                    searchCard={this.searchCard} />
                <Content
                    item={this.state.data}
                    onDeleted={this.deleteCard} />
            </div>
        )
    };
}