import React from 'react';

const BirthdayCelebration = () => {
  return React.createElement('div', null,
    React.createElement('label', { htmlFor: 'bd_name' }, 'Name:'),
    React.createElement('input', { type: 'text', id: 'bd_name', name: 'Name' }),

    React.createElement('label', { htmlFor: 'bd_age' }, 'Age:'),
    React.createElement('input', { type: 'number', id: 'bd_age', name: 'Age' }),

    React.createElement('p', null,'Celebration on ', React.createElement('strong', null, 'Dec 1st, 2023')),

    React.createElement('div', { className: 'side-img' },
      React.createElement('img', { src: '', alt: 'loading', className: 'bd_image' })
    ),

    React.createElement('br'),
    React.createElement('br'),
    React.createElement('br'),

      React.createElement('footer', null,
      React.createElement('h3', { className: 'venue' }, 'venue:'),
      React.createElement('p', { className: 'p-tag' }, 'Come along with your family to the below location.'),
      React.createElement('a', { href: 'https://www.google.com/maps/place/London,+UK/@51.5286416,-0.1015987,11z/data=!3m1!4b1!4m6!3m5!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5072178!4d-0.1275862!16zL20vMDRqcGw?entry=ttu', className: 'a-tag' }, 'Click Here to see Location')
    )
  );
};

export default BirthdayCelebration;
