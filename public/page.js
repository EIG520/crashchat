document.body.onload = load;
async function load() {
    let cur_entry = await (await fetch(`${window.location.href}entries`)).text().then(data => data);

    console.log(`entries: ${cur_entry}`);


    while (cur_entry > 0) {
        cur_entry -= 1;

        const msg = document.createElement("div");
        const text = document.createTextNode(await (await fetch(`${window.location.href}get?id=${cur_entry}`)).text().then(data => data));

        msg.appendChild(text);

        document.body.insertBefore(msg, document.getElementById("bottom"))
    }

    const form = document.getElementById("form")

    form.addEventListener("submit", e=>{
        e.preventDefault();

        const data = new FormData(form);
        fetch(`${window.location.href}send?text=${data.get("message")}`).then()
        form.reset();
    })
}