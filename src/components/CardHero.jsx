import React from 'react';

        class CardHero extends React.Component {
            render() {
                        //здесь мы берем конкретные свойства, которые будут задаваться 
                        //при вызове этого компонента
                        const {name, universe, alterego, occupation, friends, superpowers, url, info} = this.props;
                return (
                    <div className="CardHero">
                        <div className="card-body">
                            <img src={url} alt={name}/>
                            <h2 className="card-name">{name}</h2>
                            <p className="card-universe">Вселенная: {universe}</p>
                            <p className="card-alterego">Альтер эго: {alterego}</p>
                            <p className="card-occupation">Род занятий: {occupation}</p>
                            <p className="card-friends">Друзья: {friends}</p>
                            <p className="card-superpowers">Суперсилы: {superpowers}</p>
                            <p className="card-info">Информация: {info}</p>
                        </div>
                        <div className="card-footer">
                            <span className="card-star">★★★★★</span>
                        </div>
                    </div>
                );
            }
        }

export default CardHero;