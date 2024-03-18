export default function Reviews() {
  const reviews = [
    {
      name: "Cassidi Bunes",
      date: "January 11, 2024",
      rating: 5,
      description:
        "We had no water for a day and a half and we couldn’t get a plumber out to our house so this morning I started to call every single plumber in the area. Dave was the first one to answer and I have to say what a blessing! He said he was just up at apex and would be down soon. In my mind I figured end of the day. But no, Dave was here within the hour and was extremely polite, knowledgeable, fast, efficient, trustworthy, friendly and VERY PROFESSIONAL. We will be saving his card for future plumbing needs and sharing his info with our friends and family. Thank you Dave for saving our butts and making our weekend!",
    },
    {
      name: "H Mazzoli",
      date: "January 20, 2024",
      rating: 5,
      description:
        "Amazing service from Dave ! We’ve used Dave for 16 years and he is absolutely reliable and trustworthy.  We have referred Dave to every person we know who needs servicing. He is so professional and tidy. Best tradesperson I have ever met!",
    },
    {
      name: "Jennifer Andersion",
      date: "January 24, 2024",
      rating: 5,
      description:
        "Excellent service! I highly recommend Dave, he responded quickly(on a Friday afternoon), was very helpful on the phone and drove up to Apex to fix our burst pipe on Saturday morning for a very reasonable price.",
    },
    {
      name: "L Stewart",
      date: "January 7, 2024",
      rating: 5,
      description:
        "Dave was great. He repiped drainage, and water piping in crawlspace. Also dealt with some old troublesome cast iron and poly b removal.",
    },
  ];

  return (
    <div>
      <h2>Reviews for Kettle Valley Regional Plumbing & Gas</h2>
      <div>
        {reviews.map((review) => (
          <div>
            <p>{review.name}</p>
            <p>
              {review.rating}/5 - {review.date}
            </p>
            <p>{review.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
