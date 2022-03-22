import { createSchema, list } from '@keystone-next/keystone/schema';
import {
  text,
  relationship,
  password,
  timestamp,
  select,
} from '@keystone-next/fields';
import { document } from '@keystone-next/fields-document';

export const lists = createSchema({
  User: list({
    ui: {
      listView: {
        initialColumns: ['name', 'email'],
      },
    },
    fields: {
      name: text({ isRequired: true }),
      email: text({ isRequired: true, isUnique: true }),
      password: password({ isRequired: true }),
      language: text({}),
      country:text({}),
      timezone:text({}),
      meetings : relationship({ref:'Meeting.user', many:true}),
    },
  }),
  Meeting: list({
    ui: {
      listView: {
        initialColumns: ['user'],
      },
    },
    fields: {
      // meetingtype: option 15 30 60
      
        meetingtype: select({
          dataType: 'integer',
          options: [
            { label: '15min', value: 15 },
             {label: '30min', value: 30},
             {label: '60min', value: 60},
            
            /* ... */
          ],
        
          isRequired: true,
         
          ui: { displayMode: 'select' },
        }),
      date :timestamp({}),
      guestName:text({ isRequired: true }),
      guestEmail: text({ isRequired: true, }),
      meetingDesc:text({}),
      user: relationship({ref: 'User.meetings'}),
    },
  }), 


});
