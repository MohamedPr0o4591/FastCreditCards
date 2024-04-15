import React, { useEffect } from 'react';
import './PrivacyPolicy.css';
import { Box, Paper, Stack } from '@mui/material';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function PrivacyPolicy() {

    useEffect(() => {

        document.title = "Privacy Policy | FastCreditCards"

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })

    }, [])

    return (
        <div className='privacy_policy_page'>

            <h3 className='text-center text-light opacity-75'>
                Privacy Policy
            </h3>

            <Container className='mt-3'>
                <Box
                    sx={{
                        border: '2px solid rgba(255 ,255 ,255, .5)',
                        borderRadius: .6 + 'em',
                        p: 2,
                    }}
                >
                    <h2 className='border-bottom'>
                        Introduction
                    </h2>
                    <p >
                        This privacy notice for ("Our Company"), describes how and why we might collect, store,
                        use, and/or share ("process") your information when you use our services ("Services"),
                        such as when you:
                    </p>

                    <p >
                        Terms of Service Privacy Policy Cookie Policy
                        Introduction
                        This privacy notice for ("Our Company"), describes how and why we might collect, store,
                        use, and/or share ("process") your information when you use our services ("Services"),
                        such as when you:
                        Visit our website at <a href='https://fastcreditcards.com/'>https://fastcreditcards.com</a>, or any website of ours that links to this
                        privacy notice
                        Engage with us in other related ways, including any sales, marketing, or events
                        Questions or concerns? Reading this privacy notice will help you understand your privacy
                        rights and choices. If you do not agree with our policies and practices, please do not use
                        our Services. If you still have any questions or concerns, please contact us at <a href='#' onClick={_ => window.location.href = 'mailto:contact@fastcreditcards.com'}> contact@fastcreditcards.com </a>
                    </p>
                </Box>

                <Box
                    sx={{
                        mt: 3,
                    }}
                >
                    <h2 className='border-bottom'>
                        SUMMARY OF KEY POINTS
                    </h2>

                    <p >
                        This summary provides key points from our privacy notice, but you can find out more
                        details about any of these topics by clicking the link following each key point or by using
                        our table of contents below to find the section you are looking for.
                        <span id='What_personal_information_do_we_process'> What personal information do we process? </span> When you visit, use, or navigate our Services,
                        we may process personal information depending on how you interact and the Services,
                        the choices you make, and the products and features you use. <a href='#What_personal_information_do_we_process'> Click here</a> (What personal
                        information do we process?) to learn more.
                        Do we process any sensitive personal information? We may process sensitive personal
                        information when necessary, with your consent or as otherwise permitted by applicable
                        law. <a href='#If_you_are_located_in_Canada'> Click here</a> (If you are located in Canada, this section applies to you) to learn more.
                        Do we receive any information from third parties? We do not receive any information
                        from third parties.
                    </p>

                    <p >
                        How do we process your information? We process your information to provide, improve,
                        and administer our Services, communicate with you, for security and fraud prevention,
                        and to comply with law. We may also process your information for other purposes with
                        your consent. We process your information only when we have a valid legal reason to do
                        so. <a href='#The_information_we_collect_includes'> Click here</a> (The information we collect includes) to learn more.
                    </p>

                    <p >
                        In what situations and with which types of parties do we share personal information? We
                        may share information in specific situations and with specific categories of third parties.
                        Click here to learn more.
                    </p>

                    <p id='IS_YOUR_INFORMATION_TRANSFERRED_INTERNATIONALLY'>
                        How do we keep your information safe? We have organizational and technical processes
                        and procedures in place to protect your personal information. However, no electronic
                        transmission over the internet or information storage technology can be guaranteed to
                        be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or
                        other unauthorized third parties will not be able to defeat our security and improperly
                        collect, access, steal, or modify your information. <a href='#IS_YOUR_INFORMATION_TRANSFERRED_INTERNATIONALLY'> Click here</a> (IS YOUR INFORMATION TRANSFERRED
                        INTERNATIONALLY) to learn more.
                    </p>

                    <p >
                        What are your rights? Depending on where you are located geographically, the applicable
                        privacy law may mean you have certain rights regarding your personal information. <a href='#HOW_LONG_DO_WE_KEEP_YOUR_INFORMATION'> Click here</a> (HOW LONG DO WE KEEP YOUR INFORMATION) to learn more.
                    </p>

                    <p >
                        How do you exercise your rights? The easiest way to exercise your rights is by contacting
                        us through email at <a href='#' onClick={_ => window.location.href = 'mailto:contact@fastcreditcards.com'}> contact@fastcreditcards.com</a>. We will consider and act upon any request
                        in accordance with applicable data protection laws.
                    </p>

                    <p >
                        Want to learn more about any information we collect?
                    </p>
                </Box>

                <Box
                    sx={{
                        mt: 3,
                    }}
                >
                    <h2 className='border-bottom'>
                        1. WHAT INFORMATION DO WE COLLECT?
                    </h2>

                    <p >
                        Personal information you disclose to us
                        In Short: We collect personal information that you provide to us.
                    </p>

                    <p >
                        We collect personal information that you voluntarily provide to us when you register
                        on the Services, express an interest in obtaining information about us or our products
                        and Services, when you participate in activities on the Services, or otherwise when you
                        contact us
                    </p>

                    <p >
                        Personal Information Provided by You. The personal information that we collect
                        depends on the context of your interactions with us and the Services, the choices you
                        make, and the products and features you use. The personal information we collect may
                        include the following:
                    </p>

                    <ul >
                        <li >
                            phone numbers
                        </li>
                        <li >
                            email addresses
                        </li>
                        <li >
                            usernames
                        </li>
                        <li >
                            authentication data
                        </li>
                    </ul>

                    <p >
                        Sensitive Information. When necessary, with your consent or as otherwise permitted
                        by applicable law, we process the following categories of sensitive information:
                    </p>

                    <p id='HOW_DO_WE_HANDLE_YOUR_SOCIAL_LOGINS'>
                        Social Media Login Data. We may provide you with the option to register with us using
                        your existing social media account details, like your, Google, Steam, Hotmail, or other
                        social media account. If you choose to register in this way, we will collect the
                        information described in the section called <a href='#HOW_DO_WE_HANDLE_YOUR_SOCIAL_LOGINS?'> "HOW DO WE HANDLE YOUR SOCIAL
                            LOGINS?"</a> ( HOW DO WE HANDLE YOUR SOCIAL LOGINS?) below.
                        All personal information that you provide to us must be true, complete, and accurate,
                        and you must notify us of any changes to such personal information.
                    </p>

                    <p >
                        All personal information that you provide to us must be true, complete, and accurate,
                        and you must notify us of any changes to such personal information.
                    </p>

                    <p >
                        Information automatically collected
                    </p>
                    <p >
                        Information automatically collected
                        In Short: Some information - such as your Internet Protocol (IP) address and/or
                        browser and device characteristics-is collected automatically when you visit our
                        Services
                    </p>

                    <p >
                        We automatically collect certain information when you visit, use, or navigate the
                        Services. This information does not reveal your specific identity (like your name or
                        contact information) but may include device and usage information, such as your IP
                        address, browser and device characteristics, operating system, language preferences,
                        referring URLS, device name, country, location, information about how and when you
                        use our Services, and other technical information. This information is primarily needed
                        to maintain the security and operation of our Services, and for our internal analytics
                        and reporting purposes.
                    </p>

                    <p >
                        Like many businesses, we also collect information through cookies and similar
                        technologies. You can find out more about this in our Cookie
                        Notice:<Link to="/cookies">https://fastcreditcards.com/cookies</Link>.
                    </p>

                    <p id='The_information_we_collect_includes'>
                        The information we collect includes:
                    </p>

                    <p >
                        Log and Usage Data Log and usage data is service-related, diagnostic, usage, and
                        performance information our servers automatically collect when you access or use our
                        Services and which we record in log files. Depending on how you interact with us, this
                        log data may include your IP address, device information, browser type, and settings
                        and information about your activity in the Services (such as the date/time stamps
                        associated with your usage, pages and files viewed, searches, and other actions you
                        take such as which features you use), device event information (such as system activity,
                        error reports (sometimes called "crash dumps"), and hardware settings).
                    </p>

                    <p >
                        Device Data. We collect device data such as information about your computer, phone,
                        tablet, or other device you use to access the Services. Depending on the device used,
                    </p>

                    <p >
                        this device data may include information such as your IP address (or proxy server),
                        device and application identification numbers, location, browser type, hardware
                        model, Internet service provider and/or mobile carrier, operating system, and system
                        configuration information.
                    </p>

                    <p >
                        Location Data. We collect location data such as information about your device's
                        location, which can be either precise or imprecise. How much information we collect
                        depends on the type and settings of the device you use to access the Services. For
                        example, we may use GPS and other technologies to collect geolocation data that tells
                        us your current location (based on your IP address). You can opt out of allowing us to
                        collect this information either by refusing access to the information or by disabling your
                        Location setting on your device. However, if you choose to opt out, you may not be
                        able to use certain aspects of the Services.
                    </p>
                </Box>

                <Box
                    sx={{
                        mt: 3,
                    }}
                >

                    <h2 className='border-bottom'>
                        2. HOW DO WE PROCESS YOUR INFORMATION?
                    </h2>

                    <p >
                        In Short: We process your information to provide, improve, and administer our
                        Services, communicate with you, for security and fraud prevention, and to comply with
                        law. We may also process your information for other purposes with your consent.
                    </p>

                    <p >
                        We process your personal information for a variety of reasons, depending on how you
                        interact with our Services, including:
                    </p>

                    <ul >
                        <li >
                            To facilitate account creation and authentication and otherwise manage user
                            accounts. We may process your information so you can create and log in to your
                            account, as well as keep your account in working order.
                        </li>

                        <li >
                            To deliver and facilitate delivery of services to the user. We may process your
                            information to provide you with the requested service.
                        </li>

                        <li >
                            To respond to user inquiries/offer support to users. We may process your
                            information to respond to your inquiries and solve any potential issues you might
                            have with the requested service.
                        </li>

                        <li >
                            To fulfill and manage your orders. We may process your information to fulfill and
                            manage your orders, payments, returns, and exchanges made through the
                            Services.
                        </li>

                        <li >
                            To request feedback. We may process your information when necessary to
                            request feedback and to contact you about your use of our Services.
                        </li>

                        <li >
                            To deliver targeted advertising to you. We may process your information to
                            develop and display personalized content and advertising tailored to your
                            interests, location, and more.
                        </li>

                        <li >
                            To protect our Services. We may process your information as part of our efforts
                            to keep our Services safe and secure, including fraud monitoring and prevention.
                        </li>

                        <li >
                            To identify usage trends. We may process information about how you use our
                            Services to better understand how they are being used so we can improve them.
                        </li>

                        <li >
                            To determine the effectiveness of our marketing and promotional campaigns. We
                            may process your information to better understand how to provide marketing
                            and promotional campaigns that are most relevant to you.
                        </li>

                        <li >
                            To save or protect an individual's vital interest. We may process your information
                            when necessary to save or protect an individual's vital interest, such as to prevent
                            harm.
                        </li>
                    </ul>

                </Box>

                <Box
                    sx={{
                        mt: 3,
                    }}
                >

                    <h2 className='border-bottom'>
                        3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?
                    </h2>

                    <p >
                        In Short: We only process your personal information when we believe it is necessary
                        and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like
                        with your consent to comply with laws, to provide you with services to enter into or
                        fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate
                        business interests.
                    </p>

                    <span >
                        If you are located in the EU or UK, this section applies to you.
                    </span>

                    <p >
                        The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the
                        valid legal bases we rely on in order to process your personal information. As such, we
                        may rely on the following legal bases to process your personal information:
                    </p>

                    <ul >
                        <li >
                            Consent. We may process your information if you have given us permission (i.e.,
                            consent) to use your personal information for a specific purpose. You can
                            withdraw your consent at any time. <a href='#HOW_LONG_DO_WE_KEEP_YOUR_INFORMATION'> Click here</a>(HOW LONG DO WE KEEP YOUR INFORMATION) to
                            learn more.
                        </li>
                        <li >
                            Performance of a Contract. We may process your personal information when we
                            believe it is necessary to fulfill our contractual obligations to you, including
                            providing our Services or at your request prior to entering into a contract with
                            you.
                        </li>
                        <li >
                            Legitimate Interests. We may process your information when we believe it is
                            reasonably necessary to achieve our legitimate business interests and those
                            interests do not outweigh your interests and fundamental rights and freedoms.
                            For example, we may process your personal information for some of the purposes
                            described in order to:
                        </li>


                        <ol >
                            <li >
                                Facilitate our services for survey/survey router delivery and offer/offerwall
                                delivery
                            </li>
                            <li >
                                Develop and display personalized and relevant advertising content for our users
                            </li>

                            <li >
                                Analyze how our services are used so we can improve them to engage and retain
                                users
                            </li>

                            <li >
                                Support our marketing activities
                            </li>

                            <li >
                                Diagnose problems and/or prevent fraudulent activities
                            </li>

                            <li >
                                Understand how our users use our products and services so we can improve user
                                experience
                            </li>

                            <li >
                                Legal Obligations. We may process your information where we believe it is
                                necessary for compliance with our legal obligations, such as to cooperate with a
                                law enforcement body or regulatory agency, exercise or defend our legal rights,
                                or disclose your information as evidence in litigation in which we are involved.
                            </li>

                            <li >
                                Vital Interests. We may process your information where we believe it is necessary
                                to protect your vital interests or the vital interests of a third party, such as
                                situations involving potential threats to the safety of any person.
                            </li>
                        </ol>

                    </ul>

                    <span className='border-bottom' id='If_you_are_located_in_Canada'>
                        If you are located in Canada, this section applies to you.
                    </span>

                    <p >
                        We may process your information if you have given us specific permission (i.e., express
                        consent) to use your personal information for a specific purpose, or in situations where
                        your permission can be inferred (i.e., implied consent). You can withdraw your consent
                        at any time. <a href='#HOW_LONG_DO_WE_KEEP_YOUR_INFORMATION'> Click here</a>(HOW LONG DO WE KEEP YOUR INFORMATION) to learn more.
                    </p>

                    <p >
                        In some exceptional cases, we may be legally permitted under applicable law to
                        process your information without your consent, including, for example:
                    </p>

                    <ol >
                        <li >
                            If collection is clearly in the interests of an individual and consent cannot be
                            obtained in a timely way
                        </li>

                        <li >
                            For investigations and fraud detection and prevention
                        </li>

                        <li >
                            For business transactions provided certain conditions are met
                        </li>

                        <li >
                            If it is contained in a witness statement and the collection is necessary to assess,
                            process, or settle an insurance claim
                        </li>

                        <li >
                            For identifying injured, ill, or deceased persons and communicating with next of
                            kin
                        </li>

                        <li >
                            If we have reasonable grounds to believe an individual or company has been, is,
                            or may be victim of financial abuse
                        </li>

                        <li >
                            If it is reasonable to expect collection and use with consent would compromise
                            the availability or the accuracy of the information and the collection is reasonable
                            for purposes related to investigating a breach of an agreement or a contravention
                            of the laws of Canada or a province
                        </li>

                        <li >
                            If disclosure is required to comply with a subpoena, warrant, court order, or rules
                            of the court relating to the production of records
                        </li>

                        <li >
                            If it was produced by an individual in the course of their employment, business, or
                            profession and the collection is consistent with the purposes for which the
                            information was produced
                        </li>

                        <li >
                            If the collection is solely for journalistic, artistic, or literary purposes
                        </li>

                        <li >
                            If the information is publicly available and is specified by the regulations
                        </li>
                    </ol>

                </Box>

                <Box
                    sx={{
                        mr: 3,
                    }}
                >
                    <h2 className='border-bottom'>
                        4. WHEN AND WITH WHOM DO WE SHARE YOUR
                        PERSONAL INFORMATION?
                    </h2>

                    <p >
                        In Short: We may share information in specific situations described in this section
                        and/or with the following categories of third parties.
                    </p>

                    <p >
                        Offerwalls, survey walls, and survey routers. These parties may request information
                        from us such as IP address to deliver their service to you. Some of them may require
                        email address and date of birth prior to providing their service to you, if so, you will be
                        prompted to supply it when trying to use their service. We do not have access to the
                        data collected by them and it is not stored by us. You should read their respective
                        Privacy Notices prior to providing them with any information. They may collect
                        additional data from you.
                    </p>

                    <p >
                        Vendors, Consultants, and Other Third-Party Service Providers. We may share your
                        data with third-party vendors, service providers, contractors, or agents ("third parties")
                        who perform services for us or on our behalf and require access to such information to
                        do that work. We have contracts in place with our third parties, which are designed to
                        help safeguard your personal information. This means that they cannot do anything
                        with your personal information unless we have instructed them to do it. They will also
                        not share your personal information with any organization apart from us. They also
                        commit to protect the data they hold on our behalf and to retain it for the period we
                        instruct. The categories of third parties we may share personal information with are as
                        follows:
                    </p>

                    <ul >
                        <li >
                            Ad Networks
                        </li>
                        <li >
                            Affiliate Marketing Programs
                        </li>
                        <li >
                            Data Analytics Services
                        </li>
                        <li >Order Fulfillment Service Providers</li>
                        <li >Payment Processors</li>
                        <li >Performance Monitoring Tools</li>
                        <li >Fraud Prevention Tools</li>
                        <li >Website Hosting Service Providers</li>
                        <li >Data Storage Service Providers</li>
                        <li >Market Research Solutions</li>
                        <li >
                            We also may need to share your personal information in the following situations:
                        </li>
                        <ol >
                            <li >
                                Business Transfers. We may share or transfer your information in connection
                                with, or during negotiations of any merger, sale of company assets, financing, or
                                acquisition of all or a portion of our business to another company.
                            </li>
                            <li >Business Partners. We may share your information with our business partners to
                                offer you certain products, services, or promotions.</li>
                        </ol>
                    </ul>
                </Box>

                <Box
                    sx={{
                        mt: 3,
                    }}
                >
                    <h2 className='border-bottom'>
                        5. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?
                    </h2>

                    <p >
                        In Short: We are not responsible for the safety of any information that you share with
                        third parties that we may link to or who advertise on our Services, but are not affiliated
                        with, our Services
                    </p>

                    <p >
                        The Services may link to third-party websites, online services, or mobile applications
                        and/or contain advertisements from third parties that are not affiliated with us and
                        which may link to other websites, services, or applications. Accordingly, we do not
                        make any guarantee regarding any such third parties, and we will not be liable for any
                        loss or damage caused by the use of such third-party websites, services, or
                        applications. The inclusion of a link towards a third-party website, service, or
                        application does not imply an endorsement by us. We cannot guarantee the safety and
                        privacy of data you provide to any third parties. Any data collected by third parties is
                        not covered by this privacy notice. We are not responsible for the content or privacy
                        and security practices and policies of any third parties, including other websites,
                    </p>

                    <p >
                        services, or applications that may be linked to or from the Services. You should review
                        the policies of such third parties and contact them directly to respond to your questions.
                    </p>
                </Box>

                <Box
                    sx={{
                        mt: 3,
                    }}
                >
                    <h2 className='border-bottom'>
                        6. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                    </h2>

                    <p >
                        In Short: We may use cookies and other tracking technologies to collect and store your
                        information.
                    </p>

                    <p >
                        We may use cookies and similar tracking technologies (like web beacons and pixels) to
                        access or store information. Specific information about how we use such technologies
                        and how you can delete cookies is set out in our Cookie Notice:
                        <Link to="/cookies">https://fastcreditcards.com/cookies</Link>
                    </p>
                </Box>

                <Box
                    sx={{
                        mt: 3,
                    }}
                >
                    <h2 className='border-bottom'>
                        7. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
                    </h2>

                    <p >
                        In Short: If you choose to register or log in to our services using a social media account,
                        we may have access to certain information about you,
                    </p>

                    <p >
                        Our Services offer you the ability to register and log in using your third-party social
                        media account details (like your Google, Steam, Facebook or Twitter logins). Where
                        you choose to do this, we will receive certain profile information about you from your
                        social media provider. The profile information we receive may vary depending on the
                        social media provider concerned, but will often include your name, email address,
                        friends list, and profile picture, as well as other information you choose to make public
                        on such a social media platform.
                    </p>

                    <p >
                        We will use the information we receive only for the purposes that are described in this
                        privacy notice or that are otherwise made clear to you on the relevant Services. Please
                        note that we do not control, and are not responsible for other uses of your personal
                        information by your third-party social media provider. We recommend that you review
                        their privacy notice to understand how they collect, use, and share your personal
                        information, and how you can set your privacy preferences on their sites and apps.
                    </p>
                </Box>

                <Box
                    sx={{
                        mt: 3,
                    }}
                >
                    <h2 className='border-bottom'>
                        8. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
                    </h2>
                    <p >
                        In Short: We may transfer, store, and process your information in countries other than
                        your own
                    </p>

                    <p id='WHEN_AND_WITH_WHOM_DO_WE_SHARE_YOUR_PERSONAL_INFORMATION'>
                        Our servers are located in the United States. If you are accessing our Services from
                        outside the United States, please be aware that your information may be transferred
                        to, stored, and processed by us in our facilities and by those third parties with whom
                        we may share your personal information (see <a href='#WHEN_AND_WITH_WHOM_DO_WE_SHARE_YOUR_PERSONAL_INFORMATION'> "WHEN AND WITH WHOM DO WE SHARE
                            YOUR PERSONAL INFORMATION?"</a>( WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?)
                        above), in the United States, Germany, and other countries.
                    </p>
                    <p >
                        If you are a resident in the European Economic Area (EEA) or United Kingdom (UK),
                        then these countries may not necessarily have data protection laws or other similar
                        laws as comprehensive as those in your country. However, we will take all necessary
                        measures to protect your personal information in accordance with this privacy notice
                        and applicable law.
                    </p>
                </Box>

                <Box
                    sx={{
                        mt: 3,
                    }}
                >
                    <h2 className='border-bottom' id='HOW_LONG_DO_WE_KEEP_YOUR_INFORMATION'>
                        9. HOW LONG DO WE KEEP YOUR INFORMATION?
                    </h2>

                    <p >
                        In Short: We keep your information for as long as necessary to fulfill the purposes
                        outlined in this privacy notice unless otherwise required by law.
                    </p>

                    <p >
                        We will only keep your personal information for as long as it is necessary for the
                        purposes set out in this privacy notice, unless a longer retention period is required or
                        permitted by law (such as tax, accounting, or other legal requirements). No purpose in
                        this notice will require us keeping your personal information for longer than three (3)
                        months past the termination of the user's account.
                    </p>

                    <p >
                        When we have no ongoing legitimate business or fraud prevention need to process
                        your personal information, we will either delete or anonymize such information, or, if
                        this is not possible (for example, because your personal information has been stored in
                        backup archives), then we will securely store your personal information and isolate it
                        from any further processing until deletion is possible.
                    </p>

                </Box>

                <Box
                    sx={{
                        mt: 3,
                    }}
                >
                    <h2 className='border-bottom'>
                        10. HOW DO WE KEEP YOUR INFORMATION SAFE?
                    </h2>

                    <p >
                        In Short: We aim to protect your personal information through a system of
                        organizational and technical security measures
                    </p>

                    <p >
                        We have implemented appropriate and reasonable technical and organizational
                        security measures designed to protect the security of any personal information we
                        process. However, despite our safeguards and efforts to secure your information, no
                        electronic transmission over the Internet or information storage technology can be
                        guaranteed to be 100% secure, so we cannot promise or guarantee that hackers,
                        cybercriminals, or other unauthorized third parties will not be able to defeat our
                        security and improperly collect, access, steal, or modify your information. Although we
                        will do our best to protect your personal information, transmission of personal
                        information to and from our Services is at your own risk. You should only access the
                        Services within a secure environment.
                    </p>
                </Box>

                <Box
                    sx={{
                        mt: 3,
                    }}
                >
                    <h2 className='border-bottom'>
                        11. WHAT ARE YOUR PRIVACY RIGHTS?
                    </h2>

                    <p >
                        In Short: In some regions, such as the European Economic Area (EEA), United Kingdom
                        (UK), and Canada, you have rights that allow you greater access to and control over
                        your personal information. You may review, change, or terminate your account at any
                        time.
                    </p>

                    <p id='HOW_CAN_YOU_CONTACT_US_ABOUT_THIS_NOTICE'>
                        In some regions (like the EEA, UK, and Canada), you have certain rights under
                        applicable data protection laws. These may include the right (1) to request access and
                        obtain a copy of your personal information, (ii) to request rectification or erasure; (iii)
                        to restrict the processing of your personal information, and (iv) if applicable, to data
                        portability. In certain circumstances, you may also have the right to object to the
                        processing of your personal information. You can make such a request by contacting us
                        by using the contact details provided in the section <a href='#HOW_CAN_YOU_CONTACT_US_ABOUT_THIS_NOTICE'> "HOW CAN YOU CONTACT US
                            ABOUT THIS NOTICE?"</a> HOW CAN YOU CONTACT US ABOUT THIS NOTICE?)
                        We will consider and act upon any request in accordance with applicable data
                        protection laws.
                    </p>

                    <p >
                        If you are located in the EEA or UK and you believe we are unlawfully processing your
                        personal information, you also have the right to complain to your local data protection
                        supervisory authority. You can find their contact details here:
                        <a target='_blank' href='https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm'>https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm</a>.
                        If you are located in Switzerland, the contact details for the data protection authorities
                        are available here: <a href='https://www.edoeb.admin.ch/edoeb/en/home.html' target='_blank'>https://www.edoeb.admin.ch/edoeb/en/home.html</a>

                        Withdrawing your consent: If we are relying on your consent to process your personal
                        information, which may be express and/or implied consent depending on the
                        applicable law, you have the right to withdraw your consent at any time. You can
                        withdraw your consent at any time by contacting us by using the contact details
                        provided in the section <a href='#HOW_CAN_YOU_CONTACT_US_ABOUT_THIS_NOTICE'>"HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"</a>( HOW CAN
                        YOU CONTACT US ABOUT THIS NOTICE?) below.
                    </p>

                    <p >
                        However, please note that this will not affect the lawfulness of the processing before
                        its withdrawal nor, when applicable law allows, will it affect the processing of your
                        personal information conducted in reliance on lawful processing grounds other than
                        consent.
                    </p>

                    <span className='border-bottom'>
                        Account Information
                    </span>

                    <p >
                        If you would at any time like to review or change the information in your account or
                        terminate your account, you can:
                    </p>

                    <ul >
                        <li >
                            Contact us using the contact information provided.
                        </li>
                    </ul>

                    <p >
                        Upon your request to terminate your account, we will deactivate or delete your
                        account and information from our active databases. However, we may retain some
                        information in our files to prevent fraud, troubleshoot problems, assist with any
                        investigations, enforce our legal terms and/or comply with applicable legal
                        requirements.
                    </p>

                    <p >
                        Cookies and similar technologies: Most Web browsers are set to accept cookies by
                        default. If you prefer, you can usually choose to set your browser to remove cookies
                        and to reject cookies. If you choose to remove cookies or reject cookies, this could
                        affect certain features or services of our Services. To opt out of interest-based
                        advertising by advertisers you can visit <a href='http://www.aboutads.info/choices/'>http://www.aboutads.info/choices/</a>. For further
                        information, please see our Cookie Notice: <Link to="/cookies">https://fastcreditcards.com/cookies</Link>.
                    </p>

                    <p >
                        If you have questions or comments about your privacy rights, you may email us at
                        <a href='#' onClick={_ => window.location.href = 'mailto:contact@fastcreditcards.com'}>contact@fastcreditcards.com</a>.
                    </p>
                </Box>

                <Box
                    sx={{
                        mt: 3,
                    }}
                >
                    <h2 className='border-bottom'>
                        12. CONTROLS FOR DO-NOT-TRACK
                    </h2>

                    <p >
                        Most web browsers and some mobile operating systems and mobile applications
                        include a Do-Not Track ("DNT") feature or setting you can activate to signal your
                        privacy preference not to have data about your online browsing activities monitored
                        and collected. At this stage no uniform technology standard for recognizing and
                        implementing DNT signals has been finalized. As such, we do not currently respond to
                        DNT browser signals or any other mechanism that automatically communicates your
                        choice not to be tracked online. If a standard for online tracking is adopted that we
                    </p>

                    <p >
                        must follow in the future, we will inform you about that practice in a revised version of
                        this privacy notice.
                    </p>
                </Box>

                <Box
                    sx={{
                        mt: 3,
                    }}
                >
                    <h2 className='border-bottom'>
                        13. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                    </h2>

                    <p >
                        In Short: Yes, if you are a resident of California, you are granted specific rights
                        regarding access to your personal information
                    </p>

                    <p >
                        California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits
                        our users who are California residents to request and obtain from us, once a year and
                        free of charge, information about categories of personal information (if any) we
                        disclosed to third parties for direct marketing purposes and the names and addresses
                        of all third parties with which we shared personal information in the immediately
                        preceding calendar year. If you are a California resident and would like to make such a
                        request, please submit your request in writing to us using the contact information
                        provided below.
                    </p>
                    <p >
                        If you are under 18 years of age, reside in California, and have a registered account
                        with Services, you have the right to request removal of unwanted data that you
                        publicly post on the Services. To request removal of such data, please contact us using
                        the contact information provided below and include the email address associated with
                        your account and a statement that you reside in California. We will make sure the data
                        is not publicly displayed on the Services, but please be aware that the data may not be
                        completely or comprehensively removed from all our systems (e.g., backups, etc.).
                    </p>

                    <span className='border-bottom'>
                        CCPA Privacy Notice
                    </span>

                    <p >
                        The California Code of Regulations defines a "resident" as:
                    </p>

                    <ol >
                        <li >
                            every individual who is in the State of California for other than a temporary or
                            transitory purpose
                        </li>

                        <li >
                            every individual who is domiciled in the State of California who is outside the
                            State of California for a temporary or transitory purpose
                        </li>
                    </ol>

                    <p >
                        All other individuals are defined as "non-residents."
                    </p>

                    <p >
                        If this definition of "resident" applies to you, we must adhere to certain rights and
                        obligations regarding your personal information.
                    </p>
                    <p >
                        We may also collect other personal information outside of these categories through
                        instances where you interact with us in person, online, or by phone or mail in the
                        context of
                    </p>

                    <ul >
                        <li >
                            Receiving help through our customer support channels:
                        </li>

                        <li >
                            Participation in customer surveys or contests, and
                        </li>

                        <li >
                            Facilitation in the delivery of our Services and to respond to your inquiries.
                        </li>
                    </ul>

                    <span className='border-bottom'>
                        How do we use and share your personal information?
                    </span>

                    <p >
                        More information about our data collection and sharing practices can be found in this
                        privacy notice and our Cookie Notice: <Link to="/cookies">https://fastcreditcards.com/cookies</Link>.
                    </p>

                    <p >
                        You may contact us by email at <a href='#' onClick={_ => window.location.href = 'mailto:contact@fastcreditcards.com'}>contact@fastcreditcards.com</a>. Support chat/ticket system, or
                        by referring to the contact details at the bottom of this document,
                    </p>

                    <p >
                        If you are using an authorized agent to exercise your right to opt out we may deny a
                        request if the authorized agent does not submit proof that they have been validly
                        authorized to act on your behalf.
                    </p>

                    <p >
                        Will your information be shared with anyone else?
                    </p>

                    <p >
                        We may disclose your personal information with our service providers pursuant to a
                        written contract between us and each service provider. Each service provider is a for-
                        profit entity that processes the information on our behalf.
                    </p>

                    <p >
                        We may use your personal information for our own business purposes, such as for
                        undertaking internal research for technological development and demonstration. This
                        is not considered to be "selling" of your personal information.
                    </p>

                    <p >
                        The categories of third parties to whom we disclosed personal information for a
                        business or commercial purpose can be found under <a href='#WHEN_AND_WITH_WHOM_DO_WE_SHARE_YOUR_PERSONAL_INFORMATION'>"WHEN AND WITH WHOM DO WE
                            SHARE YOUR PERSONAL INFORMATION?"</a> (WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL
                        INFORMATION?).
                    </p>
                    <p >
                        Your rights with respect to your personal data
                    </p>

                    <p >
                        Right to request deletion of the data - Request to delete
                    </p>

                    <p >
                        You can ask for the deletion of your personal information. If you ask us to delete your
                        personal information, we will respect your request and delete your personal
                        information, subject to certain exceptions provided by law, such as (but not limited to
                        the exercise by another consumer of his or her right to free speech, our compliance
                        requirements resulting from a legal obligation, or any processing that may be required
                        to protect against illegal activities.
                    </p>

                    <span className='border-bottom'>
                        Right to be informed - Request to know
                    </span>

                    <p >
                        Depending on the circumstances, you have a right to know
                    </p>

                    <ul >
                        <li >
                            whether we collect and use your personal information;
                        </li>

                        <li >
                            the categories of personal information that we collect;
                        </li>
                        <li >
                            the purposes for which the collected personal information is used;
                        </li>

                        <li >
                            whether we sell your personal information to third parties;
                        </li>

                        <li >
                            the categories of personal information that we sold or disclosed for a business
                            purpose;
                        </li>

                        <li >
                            the categories of third parties to whom the personal information was sold or
                            disclosed for a business purpose, and
                        </li>
                        <li >
                            the business or commercial purpose for collecting or selling personal information.
                        </li>
                    </ul>

                    <p >
                        In accordance with applicable law, we are not obligated to provide or delete consumer
                        information that is de-identified in response to a consumer request or to re-identify
                        individual data to verify a consumer request.
                    </p>

                    <span className='border-bottom'>
                        Right to Non-Discrimination for the Exercise of a Consumer's Privacy Rights
                    </span>

                    <p >
                        We will not discriminate against you if you exercise your privacy rights.
                    </p>

                    <span className='border-bottom'>
                        Verification process
                    </span>

                    <p >
                        Upon receiving your request, we will need to verify your identity to determine you are
                        the same person about whom we have the information in our system. These
                        verification efforts require us to ask you to provide information so that we can match it
                        with information you have previously provided us. For instance, depending on the type
                        of request you submit, we may ask you to provide certain information so that we can
                        match the information you provide with the information we already have on file, or we
                        may contact you through a communication method (e.g., phone or email) that you
                        have previously provided to us. We may also use other verification methods as the
                        circumstances dictate.
                    </p>

                    <p >
                        We will only use personal information provided in your request to verify your identity
                        or authority to make the request. To the extent possible, we will avoid requesting
                        additional information from you for the purposes of verification. However, if we cannot
                        verify your identity from the information already maintained by us, we may request
                        that you provide additional information for the purposes of verifying your identity and
                        for security or fraud-prevention purposes. We will delete such additionally provided
                        information as soon as we finish verifying you.
                    </p>

                    <span className='border-bottom'>
                        Other privacy rights
                    </span>


                    <ul >
                        <li >
                            You may object to the processing of your personal information.
                        </li>

                        <li >
                            You may request correction of your personal data if it is incorrect or no longer
                            relevant, or ask to restrict the processing of the information.
                        </li>

                        <li >
                            You can designate an authorized agent to make a request under the CCPA on your
                            behalf. We may deny a request from an authorized agent that does not submit
                            proof that they have been validly authorized to act on your behalf in accordance
                            with the CCPA.
                        </li>

                        <li >
                            You may request to opt out from future selling of your personal information to
                            third parties. Upon receiving an opt-out request, we will act upon the request as
                            soon as feasibly possible, but no later than fifteen (15) days from the date of the
                            request submission.
                        </li>
                    </ul>

                    <p >
                        To exercise these rights, you can contact us by email at contact@fastcreditcards.com,
                        Support chat/ticket system, or by referring to the contact details at the bottom of this
                        document. If you have a complaint about how we handle your data, we would like to
                        hear from you.
                    </p>

                    <p >
                        Financial Incentives
                    </p>

                    <p >
                        "Financial incentive" means a program, benefit, or other offering, including payments
                        to consumers as compensation, for the disclosure, deletion, or sale of personal
                        information.
                    </p>

                    <p >
                        The law permits financial incentives or a price or service difference if it is reasonably
                        related to the value of the consumer's data. A business must be able to explain how
                        the financial incentive or price or service difference is reasonably related to the value
                        of the consumer's data. The explanation must include:
                    </p>

                    <ul >
                        <li >
                            a good-faith estimate of the value of the consumer's data that forms the basis for
                            offering the financial incentive or price or service difference;
                        </li>

                        <li >
                            a description of the method the business used to calculate the value of the
                            consumer's data.
                        </li>
                    </ul>

                    <p >
                        We may decide to offer a financial incentive (e.g., price or service difference) in
                        exchange for the retention or sale of a consumer's personal information.
                    </p>

                    <p >
                        If we decide to offer a financial incentive, we will notify you of such financial incentive
                        and explain the price difference, as well as material terms of the financial incentive or
                        price of service difference, including the categories of personal information that are
                        implicated by the financial incentive or price or service difference.
                    </p>

                    <p >
                        If you choose to participate in the financial incentive you can withdraw from the
                        financial incentive at any time by emailing us at <a href='#' onClick={_ => window.location.href = 'mailto:contact@fastcreditcards.com'}>contact@fastcreditcards.com</a>, Support
                        chat/ticket system, or by referring to the contact details at the bottom of this
                        document.
                    </p>
                </Box>

                <Box
                    sx={{
                        mt: 3,
                    }}
                >
                    <h2 className='border-bottom'>
                        14. DO WE MAKE UPDATES TO THIS NOTICE?
                    </h2>

                    <p >
                        In Short: Yes, we will update this notice as necessary to stay compliant with relevant
                        laws.
                    </p>

                    <p >
                        We may update this privacy notice from time to time. The updated version will be
                        indicated by an updated "Last updated" date and the updated version will be effective
                        as soon as it is accessible. If we make material changes to this privacy notice, we may
                        notify you either by prominently posting a notice of such changes or by directly sending
                        14. DO WE MAKE UPDATES TO THIS NOTICE?
                        you a notification. We encourage you to review this privacy notice frequently to be
                        informed of how we are protecting your information.
                    </p>
                </Box>

                <Box
                    sx={{
                        mt: 3,
                    }}
                >
                    <h2 className='border-bottom'>
                        15. HOW CAN YOU CONTACT US ABOUT THIS
                    </h2>

                    <p >
                        If you have questions or comments about this notice, you may contact our Data
                        Protection Officer (DPO), Mykola Perehinets, by email at <a href='#' onClick={_ => window.location.href = 'mailto:contact@fastcreditcards.com'}>contact@fastcreditcards.com</a>.
                    </p>
                </Box>

                <Box
                    sx={{
                        mt: 3,
                    }}
                >
                    <h2 className='border-bottom'>
                        16. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA
                        WE COLLECT FROM YOU?
                    </h2>

                    <p >
                        Based on the applicable laws of your country, you may have the right to request access
                        to the personal information we collect from you, change that information, or delete it.
                        To request to review, update, or delete your personal information, please email:
                        <a href='#' onClick={_ => window.location.href = 'mailto:contact@fastcreditcards.com'}>contact@fastcreditcards.com</a>.
                    </p>
                </Box>
            </Container>

        </div>
    )
}

export default PrivacyPolicy
