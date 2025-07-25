import { User } from "../components/User";

export function UserList() {
  const items = [
    {
      name: "Mocha",
      image:
        "https://i.pinimg.com/736x/bc/17/c0/bc17c0f6acf8ceb7444fd90545e7a1be.jpg",
    },
    {
      name: "Cappucino",
      image:
        "https://i.pinimg.com/736x/c6/17/22/c61722ce33767092ce51b703ceab1114.jpg",
    },
    {
      name: "Espresso",
      image:
        "https://th.bing.com/th/id/R.e8f15b58e44be1950903a878b4eaabf8?rik=lAGE3lvaODZL9w&riu=http%3a%2f%2fimages.shoutwiki.com%2fsanrio%2fa%2fad%2fEspresso.png&ehk=8dVJWqUAmm2Woqjx19SpRDUhPv2rLAR16OOLxe2QTPI%3d&risl=&pid=ImgRaw&r=0",
    },
  ];

  return (
    <div>
      {items.map((item) => (
        // <User name={item.name} image={item.image} />
        // this only works when properties name == key name
        // <User {...item} />
        //explicit named instantiation is least priority
        //one way to set default value
        // <User name="Unknown" {...item} />
        <User name="Unknown" {...item} />
      ))}
    </div>
  );
}
