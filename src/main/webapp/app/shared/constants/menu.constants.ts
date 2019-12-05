import { IMenu } from 'app/shared/models/menu';

export const MENU: IMenu = {
  items: [
    {
      icon: 'city',
      text: 'PESEM',
      translate: 'pesem.title',
      children: [
        {
          link: 'pesem',
          icon: 'cogs',
          text: 'Configuración',
          translate: 'pesem.configuration.title'
        },
        {
          link: 'pesem/objetivos',
          icon: 'clipboard-list',
          text: 'Objetivos Estratégicos',
          translate: 'pesem.goals.title'
        },
        {
          link: 'pesem/acciones',
          icon: 'clipboard-list',
          text: 'Acciones Estratégicas',
          translate: 'pesem.actions.title'
        }
      ]
    },
    {
      icon: 'building',
      text: 'PEI',
      translate: 'pei.title',
      children: [
        {
          link: 'pei',
          icon: 'cogs',
          text: 'Configuración',
          translate: 'pei.configuration.title'
        },
        {
          link: 'pei/objetivos',
          icon: 'clipboard-list',
          text: 'Objetivos Estratégicos',
          translate: 'pei.goals.title'
        },
        {
          link: 'pei/acciones',
          icon: 'clipboard-list',
          text: 'Acciones Estratégicas',
          translate: 'pei.actions.title'
        }
      ]
    }
  ]
};
