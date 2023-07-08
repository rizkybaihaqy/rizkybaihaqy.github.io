async function getCommitDate() {
  try {
    const response = await fetch(
      "https://api.github.com/repos/rizkybaihaqy/rizkybaihaqy.github.io/branches/master"
    );
    const data = await response.json();
    return data.commit.commit.committer.date;
  } catch (error) {
    console.error(error);
    return null;
  }
}

getCommitDate().then((date) => {
  const commitDate = new Date(date);
  const hours = String(commitDate.getHours()).padStart(2, "0");
  const minutes = String(commitDate.getMinutes()).padStart(2, "0");
  const formattedTime = `${hours}:${minutes}`;

  document.getElementsByTagName("time")[0].setAttribute("datetime", date);
  document.getElementsByTagName("time")[0].innerHTML = formattedTime;
});
