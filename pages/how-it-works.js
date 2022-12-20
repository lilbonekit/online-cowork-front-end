import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";

export default function HowItWorks() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <Head>
        <title>Online CoWork FAQ</title>
        <meta
          name="description"
          content="FAQ's about the Online CoWork Lottery"
        />
      </Head>
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center font-nunito">
            <h2 className="text-3xl font-bold font-nunito text-white sm:text-4xl xl:text-5xl pt-5">
              Frequently Asked Questions
            </h2>
            <p className="max-w-lg mx-auto mt-6 text-base text-coworkdarkbeige font-nunito font-light">
              Hi Online CoWorker! We are so excited that you&apos;re here.💚
              Below you&apos;ll find some answers to our most frequently asked
              questions!
            </p>
          </div>

          <div className="grid max-w-5xl grid-cols-1 mx-auto mt-10 sm:mt-20 md:grid-cols-2 md:gap-x-16 gap-y-8 md:gap-y-12">
            <div>
              <p className="text-xl font-bold text-white sm:text-2xl font-nunito">
                Why are you using blockchain technology for this?
              </p>
              <p className="mt-3 text-base font-extralight text-coworkdarkbeige sm:mt-6 sm:text-lg">
                There are a few reasons for this! Firstly, Blockchain technology
                provides an AMAZING way for us to create a lottery that is&nbsp;
                <strong>completely automated and completely fair</strong>
                &nbsp;as it is free of human interference. Secondly, online
                payment systems such as Paypal are limited in many countries.
                Blockchain technology provides a way{" "}
                <strong>
                  for payments to be made without the need of a third party
                </strong>{" "}
                such as a bank or credit union. Thirdly, by building the Online
                CoWork lottery with blockchain technology,{" "}
                <strong>
                  we aim to show how useful this technology can be and how it
                  can be used for good to improve the lives of people around the
                  world
                </strong>
                .
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-white sm:text-2xl font-nunito">
                Why did you create this lottery?
              </p>
              <p className="mt-3 text-base font-extralight text-coworkdarkbeige sm:mt-6 sm:text-lg font-nunito">
                If you earn money online, it means you likely have tasks to
                complete - and you probably wouldn&apos;t mind some pocket money
                to fund your business! This is where the lottery comes in. It
                aims to help with 2 common issues that plague women with online
                businesses - <strong>productivity and funding</strong>. Our
                founder, Hayley, has travelled to many countries and came across
                many women who were trying to make a living online. And so
                Online CoWork was born. (But let&apos;s not forget that this is
                also about having a bit of fun and connecting with like-minded
                people from around the world!)
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-white sm:text-2xl font-nunito">
                Who is this lottery aimed at?
              </p>
              <p className="mt-3 text-base font-extralight text-coworkdarkbeige sm:mt-6 sm:text-lg font-nunito">
                This lottery is aimed at helping women and non-binary people
                with online businesses from around the world (including remote
                workers!). People who work online from home, coffee shops and
                co-working spaces. We are talking about{" "}
                <strong>
                  virtual assistants, social media managers, bloggers,
                  YouTubers, online yoga instructors, Etsy and Amazon sellers,
                  influencers, software developers, online lawyers, online
                  accountants, etc!
                </strong>
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-white sm:text-2xl font-nunito">
                But do I have to be a women/non-binary person to participate?
              </p>
              <p className="mt-3 text-base font-extralight text-coworkdarkbeige sm:mt-6 sm:text-lg font-nunito">
                The Online CoWork lottery is aimed at helping{" "}
                <strong>women and non-binary people specifically</strong> - as
                this is a demographic that has historically been marginalized.
                However, we didn&apos;t create Online CoWork to discriminate
                based on gender! If you don&apos;t identify as
                female/non-binary, you are welcome to participate if you feel
                that our platform could be of use to you!
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-white sm:text-2xl font-nunito">
                Ok, so how do I do this?
              </p>
              <p className="mt-3 text-base font-extralight text-coworkdarkbeige sm:mt-6 sm:text-lg font-nunito">
                1){" "}
                <strong>
                  If this is your first time participating, you will please need
                  to register for the lottery by creating a profile.{" "}
                </strong>{" "}
                You can access the profile form by clicking the &apos;Start
                Here&apos; button at the top of the page (Note: Your wallet
                needs to be connected in order to see this button).
                <br />
                <br />
                Once you have completed this form, we will manually approve it
                within 72 hours (but hopefully much faster!). If your profile is
                approved, it will go into our member directory to hopefully
                bring more clients/sales to your business - or followers to your
                social media sites! You can then add your first task to the
                lottery right away.
                <br />
                <br />
                2) To add your first business task that you&apos;ve been
                procrastinating about completing, make sure that{" "}
                <strong>you have a free crypto wallet</strong> and that it{" "}
                <strong>has a few MATIC coins</strong> in it (more on this
                later!).
                <br />
                <br />
                3) <strong>Connect your wallet</strong> on the home page (
                <a
                  href="https://metaschool.so/articles/how-to-change-add-new-network-metamask-wallet/"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  make sure that it is on the Polygon Network
                </a>
                ) and you&apos;ll see a box where you can add your task.{" "}
                <strong>Type your task into the box</strong>. You will also need
                to add an amount in MATIC that you believe would personally give
                you some extra accountability to get the task done. 1 MATIC is
                around 1 USD, but you can see the exact current price of MATIC
                by clicking{" "}
                <a
                  href="https://www.coingecko.com/en/coins/polygon"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
                .
                <br />
                <br />
                NOTE:
                <br />
                a) Each tasks costs a minimum of 1 MATIC.
                <br />
                b) For every 1 MATIC that you put into the lottery prize pool
                each week, you get one entry! That means, if you bet $100 on
                yourself that you will say create your SEO strategy by the end
                of the week, that means your name will go into the hat 100 times
                for that particular lottery draw!
                <br />
                c) You will NOT be getting this money back. This money will be
                added to the lottery prize pool that the lottery winner (yes,
                that could be you!) will win each week.
                <br />
                <br />
                Next, push the button to &quot;Get it done!&quot;.
                <br />
                <br />
                4) When you push the button, your wallet will pop up and
                you&apos;ll be asked to <strong>confirm the transaction</strong>
                . To add a transaction on the blockchain, you will also need to
                pay a tiny &apos;gas fee&apos; which is usually less than
                $0.01c. This will be calculated automatically when you make your
                transaction. Please keep in mind that the gas fee can change and
                we have no control over this as it is a fee required for the
                Polygon Network and has nothing to do with Online CoWork.
                <br />
                <br />
                5) Once the transaction has been confirmed,{" "}
                <strong>
                  you should see it appear in the task feed below the form
                </strong>
                . Now go, go go - <strong>get your task done!</strong>{" "}
                You&apos;ll be able to see the tasks of others appearing in the
                task feed as well, and this will also hopefully help to motivate
                you to get working!
                <br />
                <br />
                6) The 1 MATIC that each person pays for each task gets{" "}
                <strong>
                  pooled together to create the lottery &quot;winnings&quot;
                </strong>
                . These winnings will be distributed to one random &quot;Online
                CoWorker&quot; every 7 days to provide funding for their online
                business - to pay for things such as website hosting, shopify
                fees, extra product stock, etc. Or alternatively, if the Online
                CoWorker doesn&apos;t have an online business, it could be used
                to pay for educational courses for professional/personal
                development - but it&apos;s up to you! The money is yours to use
                for anything that would help you to move forwards in your life.
                <br />
                <br />
                8) The lottery prize will be reset each week.
                <br />
                <br />
                9) We will decide how many winners there are per week. Usually
                it will be 1 to 3 winners per week. if you win, please note that
                you won&apos;t be able to win for the next draw so as to allow
                others to win as well. You may still participate in the lottery
                for accountability for your tasks and to support other women in
                business, but your wallet address will be hidden for 1 week.
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-white sm:text-2xl font-nunito">
                Ok, I&apos;m intrigued! So, how do I go about getting a free
                wallet and loading it with MATIC?
              </p>
              <p className="mt-3 text-base font-extralight text-coworkdarkbeige sm:mt-6 sm:text-lg font-nunito">
                1) a) COINBASE WALLET: There are many different kinds of crypto
                wallets - but the easiest for those new to crypto is probably a{" "}
                <a
                  href="https://www.coinbase.com"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Coinbase
                </a>{" "}
                wallet - as you can buy and withdraw crypto to your bank account
                with the same wallet. It is available in a large amount of
                countries. In order to{" "}
                <a
                  href="https://www.coinbase.com/signup"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  sign-up
                </a>
                , you will need to submit an ID verification document to them,
                and once approved, you can add your Coinbase Wallet as a{" "}
                <a
                  href="https://chrome.google.com/webstore/detail/coinbase-wallet-extension/hnfanknocfeofbddgcijnmhnfnkdnaad?hl=en"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Chrome Extension
                </a>{" "}
                in your browser in order to participate in the lottery.
                Visit&nbsp;
                <a
                  href="https://www.coinbase.com/wallet/tutorials"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  the Coinbase tutorials
                </a>
                &nbsp;and follow the steps to sign up for a Coinbase Wallet.
                <br />
                <br />
                b) METAMASK WALLET: Another wallet option is a Chrome extension
                called{" "}
                <a
                  href="https://metamask.io"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Metamask
                </a>
                . This takes 2 minutes to set up (and does not require any ID
                verification), so it&apos;s great for getting started quickly to
                create your lottery profile. But while you can buy MATIC
                directly in this wallet, you cannot withdraw your winnings to
                your bank account. You would still need to transfer your
                winnings to a Coinbase/Binance wallet if you decide to withdraw
                your winnings in the future.{" "}
                <a
                  href="https://wiki.polygon.technology/docs/develop/metamask/hello"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Here
                </a>{" "}
                is a great tutorial on how to set up Metamask step-by-step.
                <br />
                <br />
                ** Something important to note about a Metamask and Coinbase
                wallet though is that they is not like a bank that you can call
                if you have a problem. You are{" "}
                <strong>FULLY in charge of the account</strong>. When you create
                your wallet, you will be given a <strong>secret phrase</strong>.
                This secret phrase is like the pin number for your bank account.
                However, if you lose the secret phrase, you will lose access to
                any funds in your Metamask forever. Wallet security is extremely
                important in the blockchain world, so it is important to keep
                your secret phrase safe! Write it on paper, put it in a ziploc
                bag and put it in a safe place - or even put it in a few safe
                places. This secret phrase can be used by anyone to access your
                account - so make sure it is in a place where no-one can use it
                and never share it with anyone online.
                <br />
                <br />
                c) ZENGO: If you are not comfortable with the idea of looking
                after your secret phrase, we recently learned about a wallet
                called{" "}
                <a
                  href="https://zengo.com"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  ZenGo
                </a>{" "}
                which you can download on your phone from the app store. To
                connect to the lottery on your desktop, you can follow their{" "}
                <a
                  href="https://zengo.com/wallet-connect/"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  easy instructions
                </a>{" "}
                using a bridge called &quot;Wallet Connect&quot;. However, ZenGo
                may not be supported in your country so please check this!
                <br />
                <br />
                DISCLAIMER: By giving these wallet suggestions we are not
                endorsing or recommending them. They are just ideas for you, but
                there are many options for wallets in the world of crypto.
                Please do your own research and decide on a wallet that best
                suits you.
                <br />
                <br />
                2) Once you have a wallet, you would need to make sure that you
                have added the <strong>&quot;Polygon&quot; network</strong>.
                Please see steps{" "}
                <a
                  href="https://wiki.polygon.technology/docs/develop/metamask/config-polygon-on-metamask"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>{" "}
                on how to do this on Metamask. Or in your Coinbase wallet, you
                can navigate to Settings, select Active Networks, and then
                Polygon network from the list.
                <br />
                <br />
                3) Next, you need to{" "}
                <strong>load your wallet with MATIC coins</strong> in order to
                take part in the lottery. You can do this many ways:
                <br />
                <br />
                a) Buy Matic directly in your{" "}
                <a
                  href="https://www.coinbase.com/how-to-buy/polygon"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Coinbase Wallet with a debit card/credit card, etc.
                </a>{" "}
                <br />
                <br />
                b) Buy Matic directly on your{" "}
                <a
                  href="https://zengo.com"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  ZenGo app
                </a>{" "}
                with your debit/credit card. Click{" "}
                <a
                  href="https://zengo.com/assets/polygon"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>{" "}
                for instructions on how to do this.
                <br />
                <br />
                c) Another great way is that you can buy MATIC directly in your
                Metamask wallet! Click{" "}
                <a
                  href="https://metamask.zendesk.com/hc/en-us/articles/360058239311-How-to-buy-crypto-in-MetaMask-Extension-"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>{" "}
                for instructions. (Choose the &apos;extension&apos; tab to learn
                specifically about buying through the Chrome extension.)
                <br />
                <br />
                Not sure where to find your Metamask address for receiving MATIC
                from say Coinbase or Binance? Your Metamask address is like your
                bank account number. It can be found{" "}
                <a
                  href="https://metamask.zendesk.com/hc/en-us/articles/360015488791-How-to-view-your-account-details-public-address"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
                .
                <br />
                <br />
                NOTE: Each wallet (and your bank) charges a fee for exchanging
                regular currency (called &apos;fiat&apos; - AUD, USD, etc) into
                crypto. And you will be charged again when you convert your
                crypto back to fiat currency. This fee can range from 1 to 3% -
                please check the fees for your personal wallet provider and your
                bank.
                <br />
                <br />
                Also,{" "}
                <strong>
                  if you cannot see your MATIC coins in your Metamask wallet
                  once you have purchased them
                </strong>
                , look at the{" "}
                <a
                  href="https://support.ledger.com/hc/en-us/articles/6375103346077-Add-custom-tokens-to-MetaMask?docs=true"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  bottom of your Metamask screen
                </a>{" "}
                and you will see a button &quot;Import Token&quot;. Click that
                and paste this contract address for Polygon Matic:
                0x0000000000000000000000000000000000001010, then click &apos;Add
                Custom Token&apos;. Now, your MATIC coins should be visible in
                your wallet under &apos;Assets&apos;.
                <br />
                <br />
                4) If you have any problems or if you would like someone to help
                you through this process, please feel free to email us at info
                (at) onlinecowork.com. We provide an onboarding service for an
                extra fee to help you to get set up.
                <br />
                <br />
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-white sm:text-2xl font-nunito">
                That all sounds good, but will I get my MATIC back if I complete
                each task?
              </p>
              <p className="mt-3 text-base font-extralight text-coworkdarkbeige sm:mt-6 sm:text-lg font-nunito">
                Unfortunately, it is impossible for us to know if you actually
                completed your task or not. If all users &quot;complete&quot;
                their tasks, this would mean that there would be no money to
                giveaway in the lottery. So this wouldn&apos;t work. Having said
                this, if you know that you won&apos;t be getting your money
                back, this provides extra accountability for you to commit to
                getting your task done. So by participating, you benefit in 2
                ways - you receive extra accountability to get your task done
                AND you get a lottery ticket for the chance to win funds for
                your business! 🥳
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-white sm:text-2xl font-nunito">
                What kind of tasks can I add and how often can I add a task?
              </p>
              <p className="mt-3 text-base font-extralight text-coworkdarkbeige sm:mt-6 sm:text-lg font-nunito">
                You can add any <strong>business</strong> task that you have
                been procrastinating about, or that you just need to do that
                day! It could be writing a blog post, creating your website,
                emailing 3 clients, creating an SEO strategy, making an
                Instagram post - or even cleaning your desk or getting to inbox
                zero! You could add one task a week or you could add 10 tasks a
                day - it&apos;s up you! The more tasks you add, the more
                incentive you&apos;ll have to get your tasks done, the more
                you&apos;ll move forwards in your business and the more chances
                you&apos;ll have of winning the lottery - AND the higher the
                lottery prize pool will be! Feel good knowing that you&apos;re
                getting your tasks done - and even if you don&apos;t win the
                prize money, you&apos;ll be helping another Online CoWorker to
                reach their dreams!
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-white sm:text-2xl font-nunito">
                Does the full 1 MATIC go into the lottery?
              </p>
              <p className="mt-3 text-base font-extralight text-coworkdarkbeige sm:mt-6 sm:text-lg font-nunito">
                We do a 70/30 split where 70% of each MATIC goes into the
                lottery. The other 30% we keep as a service fee for business
                expenses to keep the lottery going.
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-white sm:text-2xl font-nunito">
                Will you let us know if we&apos;ve won?
              </p>
              <p className="mt-3 text-base font-extralight text-coworkdarkbeige sm:mt-6 sm:text-lg font-nunito">
                Unfortunately, as crypto wallets do not have identity associated
                with them, we are unable to let you know - you would need to go
                into your wallet every now and again to check! Or head to our
                home page where we&apos;ll usually display the winner/s at the
                top!
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-white sm:text-2xl font-nunito">
                I love what you&apos;re doing and I&apos;d like to donate to the
                lottery directly. How do I do this?
              </p>
              <p className="mt-3 text-base font-extralight text-coworkdarkbeige sm:mt-6 sm:text-lg font-nunito">
                That&apos;s amazing! We appreciate you! On the home page,
                you&apos;ll see a button to donate directly to that week&apos;s
                lottery.
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-white sm:text-2xl font-nunito">
                If I win the lottery, do I need to pay tax on my winnings?
              </p>
              <p className="mt-3 text-base font-extralight text-coworkdarkbeige sm:mt-6 sm:text-lg font-nunito">
                Unfortunately, we cannot give any tax advice. But as it is
                income, please contact your accountant for advice about your
                individual tax circumstances.
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-white sm:text-2xl font-nunito">
                Does this lottery have a free community as well?
              </p>
              <p className="mt-3 text-base font-extralight text-coworkdarkbeige sm:mt-6 sm:text-lg font-nunito">
                Yes! Join us on Discord - the virtual office for women who work
                online! Co-work and connect with others from around the world!
                Click{" "}
                <a
                  href="https://office.onlinecowork.com"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
                .
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-white sm:text-2xl font-nunito">
                Who can I contact if I have more questions?
              </p>
              <p className="mt-3 text-base font-extralight text-coworkdarkbeige sm:mt-6 sm:text-lg font-nunito">
                You are welcome to message us at info (at) onlinecowork.com!
                However, as we are a very small team, please allow 3 to 4 days
                for a response. Thank you!
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-white sm:text-2xl font-nunito">
                I would like to advertise my products and services, do you know
                where I could do this?
              </p>
              <p className="mt-3 text-base font-extralight text-coworkdarkbeige sm:mt-6 sm:text-lg font-nunito">
                We have dedicated our home page (onlinecowork.com) to sharing
                the events, products and services of women who work online!
                Think of it as a more organized version of a Facebook Group
                promo thread! Click{" "}
                <a
                  href="https://onlinecowork.com"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>{" "}
                to post a link to your blogs, Etsy products, workshops, quizzes,
                freebies, etc! It&apos;s free. Also, if you&apos;d like to
                advertise within our discord community (or perhaps host
                workshops within our Discord community), please contact us at
                info (at) onlinecowork.com.
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-white sm:text-2xl font-nunito">
                Can you tell me more about Blockchain security?
              </p>
              <p className="mt-3 text-base font-extralight text-coworkdarkbeige sm:mt-6 sm:text-lg font-nunito">
                The most important thing that you need to know right now is that
                while blockchain technology is extremely useful and is changing
                the face of many industries such as healthcare, finance, etc,
                security is extremely important! If you&apos;d like to learn
                more about how to keep the funds in your Metamask wallet safe,
                please read{" "}
                <a
                  href="https://www.alphr.com/metamask-got-hacked/"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  this article
                </a>
                .
                <br />
                <br />
                It is a good idea to not use your Metamask wallet while on
                public wifi, don&apos;t click on any suspicious links in your
                emails or online and never give your secret phrase to anyone. It
                is also a good idea to avoid keeping large amounts of money in
                your Metamask account. Please note that in the unlikely event
                that your Metamask wallet gets hacked and you lose your money,
                we cannot be held responsible. But the risk is small and know
                that over 20 million people use Metamask to keep their funds
                safe!
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-white sm:text-2xl font-nunito">
                What if I am not able to purchase MATIC? Are there any
                alternatives to buying MATIC with a credit/debit card, Apple
                Pay, bank transfer, etc?
              </p>
              <p className="mt-3 text-base font-extralight text-coworkdarkbeige sm:mt-6 sm:text-lg font-nunito">
                There are a few ways that you can &apos;earn&apos; crypto online
                - we found{" "}
                <a
                  href="https://geekflare.com/finance/earn-free-crypto/"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  this article
                </a>{" "}
                which gives some options! You can then convert your earnings
                into MATIC to use for the lottery! Remember, you only need to
                add one task (around 1 USD) to be eligible for the draw that
                week!
                <br />
                <br />
                Another option is to sign up for a Coinbase wallet with a
                referral link such as this{" "}
                <a
                  href="https://www.coinbase.com/join/s0e1tn"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  one
                </a>{" "}
                - as you may get $10 in Bitcoin for signing up! You can then
                convert this bitcoin into MATIC and send it to your Metamask
                wallet address to use for the lottery!
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-white sm:text-2xl font-nunito">
                How do I withdraw my winnings?
              </p>
              <p className="mt-3 text-base font-extralight text-coworkdarkbeige sm:mt-6 sm:text-lg font-nunito">
                Unfortunately, you cannot withdraw to your bank account or
                Paypal directly from Metamask. You would need to send your
                crypto from your Metamask to your Coinbase wallet and request
                withdrawal from there to your bank account or Paypal.
                <br />
                <br />
                Head over to your Metamask and follow these{" "}
                <a
                  href="https://metamask.zendesk.com/hc/en-us/articles/360015488931-How-to-send-ETH-and-ERC-20-tokens-from-your-MetaMask-Wallet"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  instructions
                </a>
                .
                <br />
                <br />
                However, if you are using ZenGo/Coinbase to connect directly to
                Online CoWork, then you can just request withdrawal directly in
                your ZenGo/Coinbase app. If you have any struggles - ZenGo and
                Coinbase have extensive help center where you can chat with them
                for advice. There are also many videos on YouTube on withdrawing
                from these platforms.
                <br />
                <br />
                Note: Your wallet may charge you a withdrawal fee or 1 to 3% -
                please check with your wallet provider.
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-white sm:text-2xl font-nunito">
                Where can I learn more about Web3 and Blockchain Technology?
              </p>
              <p className="mt-3 text-base font-extralight text-coworkdarkbeige sm:mt-6 sm:text-lg font-nunito">
                This{" "}
                <a
                  href="https://hayleyiscoding.hashnode.dev/web-3-for-beginners"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  article
                </a>{" "}
                is a great start! It is a very simple article that our founder,
                Hayley, wrote on Hashnode where it was featured.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
