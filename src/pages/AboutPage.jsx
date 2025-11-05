import React from 'react';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import Reveal from '../components/Reveal';
import PrettySeparator from '../components/PrettySeparator';

export default function AboutPage() {
    return (
        <div className="container py-16 space-y-20">
            {/* 1) WHO WE ARE */}
            <section className="text-center">
                <SectionHeader
                    eyebrow="About Us"
                    title="Who We Are"
                    subtitle="To Remember, Reflect, and Rest in Christ"
                    align="center"
                />

                {/* Story / Vision / Mission — clean editorial tiles with tiny photo accents (optional) */}
                <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
                    <Reveal>
                        <Card className="p-6 h-full text-left">
                            {/* tiny photo accent (optional) */}
                            <div className="aspect-[3/2] overflow-hidden rounded-xl2 border border-line mb-4">
                                <img
                                    src="/about-story.jpg"
                                    alt="Our Story"
                                    className="w-full h-full object-cover"
                                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                                />
                            </div>
                            <h3 className="font-semibold text-lg">Our Background</h3> { /* TODO: Reorganize w/out pics into 3 sections */}
                            <p className="muted mt-2 leading-relaxed">
                                The Pasture is the English Ministry of young adults at Ilshin Presbyterian Church (ISPC). ISPC began in Downey and relocated to Buena Park in the summer of 2017, where our ministry has continued under the care of our mother church. <br />Over the years, we’ve experienced many seasons of change, but in early 2025 we embraced a new chapter by rebranding as The Pasture.

                                This name reflects what our community has come to long for most: a place of true rest and solace in Christ. While still a young ministry, we are committed to building a strong theological foundation and nurturing a Christ-centered community where weary souls can find renewal, encouragement, and belonging.
                            </p>
                        </Card>
                    </Reveal>

                    <Reveal delay={0.05}>
                        <Card className="p-6 h-full text-left">
                            <div className="aspect-[3/2] overflow-hidden rounded-xl2 border border-line mb-4">
                                <img
                                    src="/essentials.jpg"
                                    alt="Vision"
                                    className="w-full h-full object-cover"
                                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                                />
                            </div>
                            <h3 className="font-semibold text-lg">Vision</h3>
                            <p className="muted mt-2 leading-relaxed">
                                We envision a community where those who are lost, weak, and weary can find true rest in Christ. Our desire is to bring people into the presence of God, build their confidence in the gospel, and become a culture that reflects Christ to our neighbors and beyond. We long to embody the words of Jesus: “Come to me, all who labor and are heavy laden, and I will give you rest” (Matthew 11:28). In a restless world, our vision is to be a place where souls are refreshed, disciples are formed, and the love of Christ extends outward to impact families, workplaces, and communities.
                            </p>
                        </Card>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <Card className="p-6 h-full text-left">
                            <div className="aspect-[3/2] overflow-hidden rounded-xl2 border border-line mb-4">
                                <img
                                    src="/flowers.jpg"
                                    alt="Mission"
                                    className="w-full h-full object-cover"
                                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                                />
                            </div>
                            <h3 className="font-semibold text-lg">Mission</h3>
                            <p className="muted mt-2 leading-relaxed">
                                Our mission is to center everything we do on Christ. We gather for worship that exalts God in spirit and in truth (John 4:24), leading us deeper into discipleship where His Word transforms our lives (2 Timothy 3:16–17). Out of this, we cultivate fellowship that reflects the unity of the body of Christ (Acts 2:42–47), where burdens are shared and joys are multiplied. Through worship, discipleship, and fellowship, we aim to not only grow in faith ourselves but also to invite others to encounter the same grace, peace, and rest we have found in Jesus.
                            </p>
                        </Card>
                    </Reveal>
                </div>
            </section>

            <PrettySeparator />


            {/* 2) OUR BELIEFS — single centered card + tasteful link button */}
            <section className="text-center">
                <SectionHeader
                    eyebrow="Beliefs"
                    title="Our Beliefs"
                    subtitle="Dedicated to a reformed faith"
                    align="center"
                />
                <Reveal>
                    <Card className="p-8 max-w-3xl mx-auto text-left">
                        <p className="leading-relaxed muted">
                            Our church belongs to the Presbyterian Church of America(PCA), whose beliefs are summarized in the Westminster Confession of Faith and Catechisms.
                            We gladly confess Christ, submit to Scripture, and seek to live out the gospel together.
                        </p>
                        <div className="mt-5">
                            <a
                                href="https://www.pcaac.org/resources/wcf/"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center rounded-full border border-line bg-white px-4 py-2 text-sm font-medium hover:bg-ink/5 transition"
                            >
                                Read the Westminster Standards →
                            </a>
                        </div>
                    </Card>
                </Reveal>
            </section>

            <PrettySeparator />

            <section className="text-center">
                <SectionHeader
                    eyebrow="Leadership"
                    title="Our Pastor"
                    subtitle="Meet Issac Oh"
                    align="center"
                />

                <Reveal>
                    <Card className="p-6 md:p-8 max-w-4xl mx-auto bg-gradient-to-br from-white to-brand-light/20">
                        <div className="grid gap-6 md:grid-cols-3 items-start">
                            <div className="md:col-span-1 flex justify-center">
                                <img
                                    src="/pastor_photo.jpg"
                                    alt="Rev. Issac Oh"
                                    className="h-48 w-48 rounded-full object-cover ring-2 ring-line"
                                />
                            </div>
                            <div className="md:col-span-2 text-left">
                                <p className="leading-relaxed muted">
                                    Issac Oh was born and raised in Southern California, spending his early years in Orange,
                                    Los Angeles, and San Bernardino Counties. After high school, he moved to Las Vegas, Nevada,
                                    where he pursued a career in the hospitality and entertainment industry for nearly a decade.
                                    During that time, the Lord called him into ministry, leading him back to California to
                                    continue his education and prepare for pastoral service.
                                </p>
                                <p className="leading-relaxed muted mt-4 border-l-2 border-brand/40 pl-4">
                                    Issac earned a B.A. in Christian Ministries from The Master’s University and went on to
                                    receive his Master of Divinity from Westminster Seminary California. He is now an ordained
                                    minister in the Presbyterian Church in America (PCA) and joyfully serves Christ and His
                                    church through preaching, teaching, and shepherding God’s people.
                                </p>
                            </div>
                        </div>
                    </Card>
                </Reveal>
            </section>
        </div>
    );
}
