import { useState, useMemo } from "react";
import { Header } from "./components/Header";
import { Categories } from "./components/Categories";
import { Menu, MenuItemType } from "./components/Menu";
import { Footer } from "./components/Footer";

const MENU_DATA: MenuItemType[] = [
  // Завтраки
  {
    id: 1,
    name: "Сырники из рикотты / творога с ароматным вареньем из лесных ягод",
    description: "",
    price: 450,
    image: "https://images.unsplash.com/photo-1573413754133-2a7214b289b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVlc2UlMjBwYW5jYWtlcyUyMHJpY290dGF8ZW58MXx8fHwxNzYxNTgzNjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Завтраки",
  },
  {
    id: 2,
    name: "Яйцо Бенедикт под соусом голландез на вафле",
    description: "на выбор: с нежным прошутто или слабосоленой форелью",
    price: 600,
    image: "https://images.unsplash.com/photo-1560052859-7deb492b0baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ2dzJTIwYmVuZWRpY3QlMjB3YWZmbGV8ZW58MXx8fHwxNzYxNTgzNjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Завтраки",
  },
  {
    id: 3,
    name: "Драник с мурманским лососем и яйцом-пашот",
    description: "",
    price: 550,
    image: "https://images.unsplash.com/photo-1704007573697-6a516da421ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3RhdG8lMjBwYW5jYWtlJTIwc2FsbW9ufGVufDF8fHx8MTc2MTU4MzY1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Завтраки",
  },
  {
    id: 4,
    name: "Большой завтрак Forest",
    description: "ароматные колбаски, яйца, свежие овощи и хрустящий хлеб",
    price: 650,
    image: "https://images.unsplash.com/photo-1588503823575-2744851a4b56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdsaXNoJTIwYnJlYWtmYXN0JTIwc2F1c2FnZXN8ZW58MXx8fHwxNzYxNTgzNjUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Завтраки",
  },
  {
    id: 5,
    name: "Шакшука со страчателлой",
    description: "пашот / глазунья – на выбор",
    price: 500,
    image: "https://images.unsplash.com/photo-1614570218825-c2a3be79b0fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGFrc2h1a2ElMjBlZ2dzfGVufDF8fHx8MTc2MTU0NDYwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Завтраки",
  },
  {
    id: 6,
    name: "Каша на кокосовом молоке с сиропом топинамбура",
    description: "овсяная или рисовая – на выбор",
    price: 350,
    image: "https://images.unsplash.com/photo-1587890767851-e9bc526764b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvbnV0JTIwbWlsayUyMHBvcnJpZGdlfGVufDF8fHx8MTc2MTU4MzY1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Завтраки",
  },
  {
    id: 7,
    name: "Балийский завтрак",
    description: "хумус, батат фри, яйцо, авокадо, кунжут, помидоры черри, шпинат",
    price: 590,
    image: "https://images.unsplash.com/photo-1758486292461-495dfdd99aaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1tdXMlMjBhdm9jYWRvJTIwYm93bHxlbnwxfHx8fDE3NjE1ODM2NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Завтраки",
  },

  // Салаты
  {
    id: 8,
    name: "Салат с баклажанами и сыром",
    description: "баклажаны фри с рикоттой, томатами и кедровыми орешками",
    price: 590,
    image: "https://images.unsplash.com/photo-1579843692771-027a4a8fda48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ2dwbGFudCUyMHNhbGFkJTIwcmljb3R0YXxlbnwxfHx8fDE3NjE1ODM2NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Салаты",
  },
  {
    id: 9,
    name: "Салат Греческий",
    description: "",
    price: 490,
    image: "https://images.unsplash.com/photo-1606735584785-1848fdcaea57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlayUyMHNhbGFkfGVufDF8fHx8MTc2MTUyMTEyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Салаты",
  },
  {
    id: 10,
    name: "Паназиатский салат с авокадо и тигровыми креветками",
    description: "",
    price: 580,
    image: "https://images.unsplash.com/photo-1628961915037-a829e926e26e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHNhbGFkJTIwc2hyaW1wfGVufDF8fHx8MTc2MTU4MzY1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Салаты",
  },
  {
    id: 11,
    name: "Бурата с томатами и базиликом",
    description: "подается с фокаччей",
    price: 790,
    image: "https://images.unsplash.com/photo-1690145482924-351234d8efcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJyYXRhJTIwdG9tYXRvJTIwYmFzaWx8ZW58MXx8fHwxNzYxNTgzNjUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Салаты",
  },
  {
    id: 12,
    name: "Цезарь с фермерским цыпленком",
    description: "",
    price: 580,
    image: "https://images.unsplash.com/photo-1712746784937-aa56235fbab0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWVzYXIlMjBzYWxhZCUyMGNoaWNrZW58ZW58MXx8fHwxNzYxNDYzNDg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Салаты",
  },
  {
    id: 13,
    name: "Цезарь с королевскими креветками",
    description: "",
    price: 650,
    image: "https://images.unsplash.com/photo-1739436776460-35f309e3f887?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWVzYXIlMjBzYWxhZCUyMHNocmltcHxlbnwxfHx8fDE3NjE1ODM2NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Салаты",
  },
  {
    id: 14,
    name: "Оливье с пастрами из индейки и пюре из зеленого горошка",
    description: "",
    price: 550,
    image: "https://images.unsplash.com/photo-1587471088253-421884425efb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGl2aWVyJTIwc2FsYWR8ZW58MXx8fHwxNzYxNTgzNjU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Салаты",
  },
  {
    id: 15,
    name: "Большой зеленый салат",
    description: "",
    price: 450,
    image: "https://images.unsplash.com/photo-1644172949364-3fcfd25604b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHNhbGFkJTIwZnJlc2h8ZW58MXx8fHwxNzYxNTgzNDAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Салаты",
  },

  // На первое
  {
    id: 16,
    name: "Гюкису Рамен",
    description: "",
    price: 590,
    image: "https://images.unsplash.com/photo-1697652974652-a2336106043b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYW1lbiUyMGJvd2x8ZW58MXx8fHwxNzYxNDg3NTQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "На первое",
  },
  {
    id: 17,
    name: "Том Ям с морепродуктами",
    description: "",
    price: 650,
    image: "https://images.unsplash.com/photo-1628430043175-0e8820df47c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b20lMjB5dW0lMjBzb3VwfGVufDF8fHx8MTc2MTU0NzAxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "На первое",
  },
  {
    id: 18,
    name: "Борщ",
    description: "",
    price: 550,
    image: "https://images.unsplash.com/photo-1677889173479-c8a0ab15ae18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3JzY2h0JTIwc291cHxlbnwxfHx8fDE3NjE1ODM2NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "На первое",
  },
  {
    id: 19,
    name: "Грибной крем-суп",
    description: "",
    price: 450,
    image: "https://images.unsplash.com/photo-1624968814155-236efede1cec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNocm9vbSUyMGNyZWFtJTIwc291cHxlbnwxfHx8fDE3NjE1ODM0MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "На первое",
  },
  {
    id: 20,
    name: "Суп Чаудер",
    description: "",
    price: 650,
    image: "https://images.unsplash.com/photo-1652408414631-f09eae7cc1db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG93ZGVyJTIwc291cHxlbnwxfHx8fDE3NjE1ODM2NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "На первое",
  },

  // Роллы
  {
    id: 21,
    name: "Филадельфия",
    description: "",
    price: 950,
    image: "https://images.unsplash.com/photo-1729698597384-d218328dc3a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGlsYWRlbHBoaWElMjByb2xsJTIwc3VzaGl8ZW58MXx8fHwxNzYxNTgzNjU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Роллы",
  },
  {
    id: 22,
    name: "Калифорния",
    description: "",
    price: 850,
    image: "https://images.unsplash.com/photo-1696091811927-6b9552931f70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxpZm9ybmlhJTIwcm9sbCUyMHN1c2hpfGVufDF8fHx8MTc2MTU4MzY1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Роллы",
  },
  {
    id: 23,
    name: "Ролл с угрем",
    description: "",
    price: 900,
    image: "https://images.unsplash.com/photo-1696091811927-6b9552931f70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZWwlMjBzdXNoaSUyMHJvbGx8ZW58MXx8fHwxNzYxNTgzNDA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Роллы",
  },
  {
    id: 24,
    name: "Опаленный лосось с креветкой",
    description: "",
    price: 900,
    image: "https://images.unsplash.com/photo-1744360515510-db7bf0f6def8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxtb24lMjBzdXNoaSUyMHJvbGx8ZW58MXx8fHwxNzYxNTgzNDA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Роллы",
  },
  {
    id: 25,
    name: "Гункан сет (креветка, икра тобико, угорь спайси, лосось спайси)",
    description: "",
    price: 750,
    image: "https://images.unsplash.com/photo-1696091811927-6b9552931f70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndW5rYW4lMjBzdXNoaSUyMHNldHxlbnwxfHx8fDE3NjE1ODM0MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Роллы",
  },

  // Пицца
  {
    id: 26,
    name: "Пепперони",
    description: "",
    price: 600,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXBwZXJvbmklMjBwaXp6YXxlbnwxfHx8fDE3NjE0NjQzNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Пицца",
  },
  {
    id: 27,
    name: "Со страчателлой и мортаделлой",
    description: "",
    price: 800,
    image: "https://downloader.disk.yandex.ru/preview/bff9a6b599db6cf3f926e46e4c8e51e71d80f1ad92fa733b73047d54e402eb40/68fff800/VCwoLNkAyRhbDqC9Yds3TrrU_Fni2nyK2ydJvcKDV4E1E5K2m_9yAN_Ghy7e_vxPmLx0DHoS2UbpySXFEHzoZQ%3D%3D?uid=0&filename=TIM08743.JPG&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=1860x885",
    category: "Пицца",
  },
  {
    id: 28,
    name: "Четыре сыра",
    description: "",
    price: 700,
    image: "https://images.unsplash.com/photo-1595378833483-c995dbe4d74f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3VyJTIwY2hlZXNlJTIwcGl6emF8ZW58MXx8fHwxNzYxNTExNTEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Пицца",
  },
  {
    id: 29,
    name: "Сливочная пицца с пастрами из индейки",
    description: "",
    price: 750,
    image: "https://images.unsplash.com/photo-1696919512419-8c888a1ff3fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXJrZXklMjBwYXN0cmFtaSUyMHBpenphfGVufDF8fHx8MTc2MTU4MzY2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Пицца",
  },
  {
    id: 30,
    name: "Мясная пицца с белыми грибами",
    description: "",
    price: 950,
    image: "https://images.unsplash.com/photo-1636044995368-4d84833fdb0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWF0JTIwbXVzaHJvb20lMjBwaXp6YXxlbnwxfHx8fDE3NjE1ODM2NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Пицца",
  },
  {
    id: 31,
    name: "С черри и фетой",
    description: "",
    price: 850,
    image: "https://images.unsplash.com/photo-1705948734996-df1abafb4a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVycnklMjB0b21hdG8lMjBmZXRhJTIwcGl6emF8ZW58MXx8fHwxNzYxNTgzNjYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Пицца",
  },
  {
    id: 32,
    name: "Пицца с тунцом",
    description: "",
    price: 850,
    image: "https://images.unsplash.com/photo-1639397753197-bab733459943?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dW5hJTIwcGl6emF8ZW58MXx8fHwxNzYxNTgzNDA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Пицца",
  },

  // Закуски
  {
    id: 33,
    name: "Брускетта со страчателлой и прошутто / гуакамоле и лососем",
    description: "",
    price: 550,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicnVzY2hldHRhJTIwdG9hc3R8ZW58MXx8fHwxNzYxNTgzNjYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Закуски",
  },
  {
    id: 34,
    name: "Тартар из мраморной говядины / лосося с соусом понзу",
    description: "",
    price: 700,
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXJ0YXJlJTIwc2FsbW9ufGVufDF8fHx8MTc2MTU4MzY2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Закуски",
  },
  {
    id: 35,
    name: "Эклер с паштетом из куриной печени / тартаром из креветки",
    description: "",
    price: 450,
    image: "https://images.unsplash.com/photo-1618164436269-65284de53b12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Закуски",
  },
  {
    id: 36,
    name: "Жареный сулугуни с ягодным соусом",
    description: "",
    price: 400,
    image: "https://images.unsplash.com/photo-1618164436269-65284de53b12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Закуски",
  },
  {
    id: 37,
    name: "Карпаччо из рибая",
    description: "тончайшие ломтики мраморной говядины с трюфельным кремом и пармезаном",
    price: 650,
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJwYWNjaW98ZW58MXx8fHwxNzYxNTgzNjYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Закуски",
  },
  {
    id: 38,
    name: "Перец Рамиро с рикоттой",
    description: "запечённый сладкий перец с нежной рикоттой, творожным сыром, соусом тоннато и кедровыми орешками",
    price: 400,
    image: "https://images.unsplash.com/photo-1579843692771-027a4a8fda48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Закуски",
  },
  {
    id: 39,
    name: "Креветки Васаби",
    description: "",
    price: 550,
    image: "https://images.unsplash.com/photo-1628430043175-0e8820df47c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Закуски",
  },
  {
    id: 40,
    name: "Бобы Эдамаме",
    description: "",
    price: 450,
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Закуски",
  },
  {
    id: 41,
    name: "Севиче из гребешка",
    description: "",
    price: 850,
    image: "https://images.unsplash.com/photo-1505252585461-04fd236fbe67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Закуски",
  },
  {
    id: 42,
    name: "Винный сет",
    description: "сыр с голубой плесенью, пармезан, маринованные перчики, черри-кимчи, прошутто, гриссини, лигурийское песто, виноград, гигантские маслины, мортаделла, фисташки, мед",
    price: 1200,
    image: "https://images.unsplash.com/photo-1567132326-15d0c3e4a4c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Закуски",
  },
  {
    id: 43,
    name: "Сет под водку",
    description: "филе сельди, варенный картофель, сало, маринованные огурчики, черри, бородинский хлеб",
    price: 650,
    image: "https://images.unsplash.com/photo-1608909211599-b923b7f5d301?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Закуски",
  },
  {
    id: 44,
    name: "Ассорти европейских сыров",
    description: "",
    price: 1100,
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Закуски",
  },

  // По горячему
  {
    id: 45,
    name: "Стейк Рибай",
    description: "за 100 г",
    price: 850,
    image: "https://images.unsplash.com/photo-1558030006-450675393462?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "По горячему",
  },
  {
    id: 46,
    name: "Стейк Стриплойн",
    description: "за 100 г",
    price: 650,
    image: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "По горячему",
  },
  {
    id: 47,
    name: "Свиная шея гриль с трюфельным пюре",
    description: "",
    price: 750,
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "По горячему",
  },
  {
    id: 48,
    name: "Паста Карбонара",
    description: "",
    price: 590,
    image: "https://images.unsplash.com/photo-1582436416175-d750d2595fd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "По горячему",
  },
  {
    id: 49,
    name: "Паста Болоньезе",
    description: "",
    price: 550,
    image: "https://images.unsplash.com/photo-1545358750-19fc9cdabe07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "По горячему",
  },
  {
    id: 50,
    name: "Паппарделле с лососем и шпинатом",
    description: "",
    price: 750,
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "По горячему",
  },
  {
    id: 51,
    name: "Паста Вонголе",
    description: "",
    price: 650,
    image: "https://images.unsplash.com/photo-1636996257464-a6927c00c02d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "По горячему",
  },
  {
    id: 52,
    name: "Щечки в соусе деми-глас с птитимом и белыми грибами",
    description: "",
    price: 850,
    image: "https://images.unsplash.com/photo-1602880759414-55798ef9c5a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "По горячему",
  },
  {
    id: 53,
    name: "Пельмени из европейского благородного оленя с прованскими травами",
    description: "",
    price: 950,
    image: "https://images.unsplash.com/photo-1592913007379-1c69b1a1f98a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "По горячему",
  },
  {
    id: 54,
    name: "Свиные ребра BBQ с кукурузой гриль и салатом коул-слоу",
    description: "",
    price: 900,
    image: "https://images.unsplash.com/photo-1528607929212-8aab6e76dd7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "По горячему",
  },
  {
    id: 55,
    name: "Золотой бургер из мраморной говядины с картофелем фри",
    description: "",
    price: 750,
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "По горячему",
  },
  {
    id: 56,
    name: "Бургер из огненного цыпленка с бататом фри",
    description: "",
    price: 750,
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "По горячему",
  },
  {
    id: 57,
    name: "Бефстроганов с картофельным пюре и грибами",
    description: "",
    price: 890,
    image: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "По горячему",
  },
  {
    id: 58,
    name: "Котлета де-воляй",
    description: "куриное филе с начинкой из сливочного масла и петрушки, подается с лигурийским песто и картофельным кремом",
    price: 590,
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "По горячему",
  },
  {
    id: 59,
    name: "Дорадо гриль с киноа и овощами",
    description: "",
    price: 1490,
    image: "https://images.unsplash.com/photo-1505252585461-04fd236fbe67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "По горячему",
  },
  {
    id: 60,
    name: "Лосось на подушке из шпината аль-бурро",
    description: "",
    price: 1250,
    image: "https://images.unsplash.com/photo-1505252585461-04fd236fbe67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "По горячему",
  },
  {
    id: 61,
    name: "Сет колбасок",
    description: "купаты, колбаски, сыр чечил, маринованные огурчики, луковые кольца",
    price: 1250,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "По горячему",
  },
  {
    id: 62,
    name: "Мидии в соусе блю-чиз",
    description: "",
    price: 750,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "По горячему",
  },

  // Напитки
  {
    id: 63,
    name: "Чай",
    description: "Earl Grey, Milk Oolong, Fruits and Berries, Assam, Sencha",
    price: 390,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Напитки",
  },
  {
    id: 64,
    name: "Авторские чаи",
    description: "Strawberry-Basil, Sea Buckthorn-Passion Fruit",
    price: 590,
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Напитки",
  },
  {
    id: 65,
    name: "Бамбл на фреше",
    description: "",
    price: 450,
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Напитки",
  },
  {
    id: 66,
    name: "Айс латте",
    description: "",
    price: 350,
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Напитки",
  },
  {
    id: 67,
    name: "Американо",
    description: "200 ml / 350 ml",
    price: 250,
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Напитки",
  },
  {
    id: 68,
    name: "Флэт уайт",
    description: "",
    price: 300,
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Напитки",
  },
  {
    id: 69,
    name: "Капучино",
    description: "200 ml / 350 ml",
    price: 350,
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Напитки",
  },
  {
    id: 70,
    name: "Латте",
    description: "",
    price: 300,
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Напитки",
  },
  {
    id: 71,
    name: "Раф",
    description: "",
    price: 280,
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Напитки",
  },
  {
    id: 72,
    name: "Милкшейк",
    description: "Vanilla, Strawberry",
    price: 450,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Напитки",
  },
  {
    id: 73,
    name: "Авторские лимонады",
    description: "Citrus, Mojito, Raspberry-Grapefruit, Barberry, Pineapple-Lemongrass, Blackberry-Pomegranate",
    price: 350,
    image: "https://images.unsplash.com/photo-1523677011787-9e37b5ddf523?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Напитки",
  },
  {
    id: 74,
    name: "Сангрия non-alco",
    description: "",
    price: 450,
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Напитки",
  },
  {
    id: 75,
    name: "Глинтвейн non-alco",
    description: "",
    price: 450,
    image: "https://images.unsplash.com/photo-1577003833614-767d092309d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Напитки",
  },
  {
    id: 76,
    name: "Фреш",
    description: "Orange, Grapefruit",
    price: 350,
    image: "https://images.unsplash.com/photo-1577003833614-767d092309d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Напитки",
  },
  {
    id: 77,
    name: "Сок Рич",
    description: "Apple, Cherry, 0.2 l",
    price: 200,
    image: "https://images.unsplash.com/photo-1523677011787-9e37b5ddf523?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Напитки",
  },
  {
    id: 78,
    name: "Кока-Кола",
    description: "0.33 l",
    price: 350,
    image: "https://images.unsplash.com/photo-1528154291023-a6525fabe5b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Напитки",
  },
  {
    id: 79,
    name: "Вода",
    description: "Sparkling, Still, 0.5 l",
    price: 200,
    image: "https://images.unsplash.com/photo-1548839140-5a7c38b679b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Напитки",
  },
  {
    id: 80,
    name: "Минеральная вода Джермук",
    description: "0.5 l",
    price: 250,
    image: "https://images.unsplash.com/photo-1548839140-5a7c38b679b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Напитки",
  },

  // Детское меню
  {
    id: 81,
    name: "Куриные наггетсы с картошечкой фри",
    description: "",
    price: 250,
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Детское меню",
  },
  {
    id: 82,
    name: "Паста бомбини с сосисками в томатном соусе",
    description: "",
    price: 350,
    image: "https://images.unsplash.com/photo-1621972614219-222a6de6c9bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Детское меню",
  },
  {
    id: 83,
    name: "Куриный супчик с лапшой",
    description: "",
    price: 200,
    image: "https://images.unsplash.com/photo-1697652974652-a2336106043b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Детское меню",
  },
  {
    id: 84,
    name: "Осьминожки из сосисок с картофельным пюре и овощами",
    description: "",
    price: 300,
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Детское меню",
  },
  {
    id: 85,
    name: "Овощной салатик",
    description: "с маслом / сметаной",
    price: 250,
    image: "https://images.unsplash.com/photo-1551244072-5c2d52d0fd61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Детское меню",
  },
  {
    id: 86,
    name: "Мини-пицца Маргарита",
    description: "",
    price: 300,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Детское меню",
  },

  // Десерты
  {
    id: 87,
    name: "Яйца Зайца",
    description: "муссовый манговый десерт с шариками мороженого",
    price: 500,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Десерты",
  },
  {
    id: 88,
    name: "Мамин любимый цветок",
    description: "",
    price: 600,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Десерты",
  },
  {
    id: 89,
    name: "Дубайский тирамису",
    description: "",
    price: 800,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Десерты",
  },
  {
    id: 90,
    name: "Мороженое",
    description: "шоколадное / ванильное / клубничное",
    price: 200,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Десерты",
  },
  {
    id: 91,
    name: "Чизкейк Сан-Себастьян",
    description: "",
    price: 650,
    image: "https://images.unsplash.com/photo-1621303837164-7a6ef38558a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Десерты",
  },
  {
    id: 92,
    name: "Кто убил Лабубу",
    description: "",
    price: 650,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Десерты",
  },
  {
    id: 93,
    name: "Маковый штрудель с шариком мороженого",
    description: "",
    price: 500,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Десерты",
  },

  // Хлеб из печи
  {
    id: 94,
    name: "Фокачча с лигурийским песто, розмарином и пармезаном",
    description: "",
    price: 300,
    image: "https://images.unsplash.com/photo-1579300966700-d0285a095640?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Хлеб из печи",
  },
  {
    id: 95,
    name: "Хлебная корзина с фирменным зеленым маслом Forest",
    description: "",
    price: 250,
    image: "https://images.unsplash.com/photo-1546470427-e26264be0b24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Хлеб из печи",
  },

  // Гарниры
  {
    id: 96,
    name: "Хрустящий картофель фри",
    description: "",
    price: 200,
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Гарниры",
  },
  {
    id: 97,
    name: "Картофельное пюре",
    description: "",
    price: 200,
    image: "https://images.unsplash.com/photo-1506084868230-bb9d95c2471d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Гарниры",
  },
  {
    id: 98,
    name: "Овощи гриль / на пару",
    description: "",
    price: 350,
    image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Гарниры",
  },
  {
    id: 99,
    name: "Батат фри с зеленым айоли и пармезаном",
    description: "",
    price: 450,
    image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Гарниры",
  },
  {
    id: 100,
    name: "Соусы",
    description: "сырный / кетчуп / крем-чиз / BBQ / грибной / чесночный",
    price: 80,
    image: "https://images.unsplash.com/photo-1565661538374-a5cdf6cd12b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Гарниры",
  },
];

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Все");

  // Получаем уникальные категории
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(MENU_DATA.map((item) => item.category))
    );
    return ["Все", ...uniqueCategories];
  }, []);

  // Фильтруем блюда по категории и поисковому запросу
  const filteredItems = useMemo(() => {
    let items = MENU_DATA;

    // Фильтр по категории
    if (selectedCategory !== "Все") {
      items = items.filter((item) => item.category === selectedCategory);
    }

    // Фильтр по поисковому запросу
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query)
      );
    }

    return items;
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <div className="flex-grow">
        <Menu items={filteredItems} selectedCategory={selectedCategory} />
      </div>
      <Footer />
    </div>
  );
}
