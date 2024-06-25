require("dotenv").config({ path: "../../env" });

export default function Home() {
  return (
    <main className="flex bg-pink-100  min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello Docker</h1>
      <form
        className="flex flex-col shadow-lg gap-2 bg-white p-24"
        action={async (fromData) => {
          "use server";
          try {
            const name = fromData.get("name") as string | undefined;
            const email = fromData.get("email") as string | undefined;
            if (!name || !email) {
              return alert("Please fill all the fields");
            }

            const res = await fetch(
              `${process.env.SERVER_URL}/api/newuser?name=${name}&email=${email}`,
              {
                cache: "no-cache",
              }
            );

            const data = await res.json();

            console.log(data);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <input type="text" placeholder="Name" name="name" required />
        <input type="text" placeholder="Email" name="email" required />

        <button type="submit">Create</button>
      </form>
    </main>
  );
}
