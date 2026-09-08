import { useTranslation } from "react-i18next";

const ErrorBanner = ({
  showBanner,
  errorCode,
  onCloseHandle,
  customClass = "",
  bannerCloseTimer,
}) => {
  const { t } = useTranslation("translation");

  if (bannerCloseTimer) {
    setTimeout(onCloseHandle, bannerCloseTimer * 1000);
  }

  return showBanner && (
      <div
          className={
              "flex justify-between items-start gap-2 px-3 py-2.5 sm:px-5 lg:-mx-5 md:-mx-4 sm:-mx-3 -mx-3 error-banner " +
              customClass
          }
      >
        <div className="error-banner-text text-xs leading-snug font-semibold">
          {t(errorCode)}
        </div>
      </div>
  );
};

export default ErrorBanner;