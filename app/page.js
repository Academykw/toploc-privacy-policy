import "./globals.css";

export default function PrivacyPolicy() {
  const now = new Date();
  const lastUpdated = now.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const year = now.getFullYear();

  return (
    <>
      <header>
        <div className="header-inner">
          <span className="badge">Legal Document</span>
          <h1>
            Privacy <em>Policy</em>
          </h1>
          <p className="meta">Last updated: {lastUpdated}</p>
        </div>
      </header>

      <div className="wrapper">

        {/* Table of Contents */}
        <div className="toc">
          <p className="toc-title">Contents</p>
          <ol>
            <li><a href="#overview">Overview</a></li>
            <li><a href="#no-data">No Data Collection</a></li>
            <li><a href="#children">Children&apos;s Privacy</a></li>
            <li><a href="#changes">Changes to This Policy</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ol>
        </div>

        {/* 01 — Overview */}
        <section id="overview">
          <p className="section-num">01</p>
          <h2>Overview</h2>
          <p>
            Welcome. This Privacy Policy applies to all applications and services
            developed by Toploc Consult (collectively, the &quot;Apps&quot;). We are
            committed to being transparent about how our Apps operate.
          </p>
          <div className="callout info">
            <p className="callout-label">Plain language summary</p>
            <p>
              Our Apps do not collect, store, or share any personal data. What
              happens on your device, stays on your device.
            </p>
          </div>
          <p>
            This policy applies to all our Apps. Please read it carefully so you
            understand our commitment to your privacy.
          </p>
        </section>

        {/* 02 — No Data Collection */}
        <section id="no-data">
          <p className="section-num">02</p>
          <h2>No Data Collection</h2>
          <p>
            Our Apps{" "}
            <strong>
              do not collect, store, transmit, or share any personal information
            </strong>{" "}
            whatsoever. This includes but is not limited to:
          </p>
          <ul>
            <li>Name, email address, or any account details</li>
            <li>Device identifiers or hardware information</li>
            <li>Location data</li>
            <li>Usage statistics or analytics</li>
            <li>Crash reports or diagnostics sent to us</li>
            <li>Payment or financial information</li>
            <li>Any data entered or created within the App</li>
          </ul>
          <div className="callout warn">
            <p className="callout-label">Our commitment</p>
            <p>
              We have no servers receiving your data. We have no databases storing
              your data. Everything you do in our Apps stays entirely on your own
              device.
            </p>
          </div>
          <p>
            Because we collect no data, there is nothing to sell, share, or
            disclose to any third party — ever.
          </p>
        </section>

        {/* 03 — Children's Privacy */}
        <section id="children">
          <p className="section-num">03</p>
          <h2>Children&apos;s Privacy</h2>
          <p>
            Our Apps are safe for all ages. Because we collect no personal
            information from anyone, children are equally protected. We have no
            data from any user — child or adult — on our servers.
          </p>
          <p>If you have any concerns, please feel free to reach out to us.</p>
        </section>

        {/* 04 — Changes */}
        <section id="changes">
          <p className="section-num">04</p>
          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we make
            material changes, we will notify you via email or a prominent notice
            within the Apps at least 14 days before the changes take effect.
          </p>
          <p>
            Your continued use of the Apps after the effective date constitutes
            your acceptance of the updated policy.
          </p>
        </section>

        {/* 05 — Contact */}
        <section id="contact">
          <p className="section-num">05</p>
          <h2>Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy,
            please reach out to us directly — we&apos;re happy to help.
          </p>
          <p>
            📧{" "}
            <strong>
              <a
                href="mailto:toplocconsult6@gmail.com"
                className="contact-email"
              >
                toplocconsult6@gmail.com
              </a>
            </strong>
          </p>
        </section>

      </div>

      <footer>
        <span>© {year} Toploc Consult. All rights reserved.</span>
        &nbsp;·&nbsp; Privacy Policy
      </footer>
    </>
  );
}
